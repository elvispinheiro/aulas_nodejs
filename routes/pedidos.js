const { Router } = require("express");
const { check, body, validationResult, checkSchema } = require("express-validator");
const { connection } = require("../models");
const { criar, buscarPorId, remover, atualizar } = require("../controllers/pedido");
const validation = require("../middlewares/validation");
const get = require("../schemas/pedido/get");
const post = require("../schemas/pedido/post");
const verifyToken = require("../middlewares/auth");


const router = Router();

router.get("/:id?", verifyToken, checkSchema(get), validation, async (req, res) => {
    try {
        const result = await buscarPorId(req.params.id, req.clienteId);
        res.send(result);

    } catch (error) {
        res.status(500).send({ mensagem: error.message});
    }
});

router.post("/", checkSchema(post), validation, verifyToken, async (req, res) => {
    try {
        const pedidoCriado = await criar(req.body, req.body.produtos, req.body.enderecoEntrega);
        
        const result = await buscarPorId(pedidoCriado.id, req.clienteId)

        res.send(result);
    } catch (error) {
        res.status(500).send({
            "mensagem": error.message,
        });
        
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { valorTotal, observacoes, produtos, enderecoEntrega } = req.body;

        await atualizar(id, { valorTotal, observacoes}, produtos, enderecoEntrega);
        const result = await buscarPorId(id, req.clienteId);
        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await remover(req.params.id);

        res.send();
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

module.exports = router;