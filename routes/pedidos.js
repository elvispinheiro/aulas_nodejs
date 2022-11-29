const { Router } = require("express");
const { connection } = require("../models");
const { criar, buscarPorId, remover, atualizar } = require("../controllers/pedido");

const router = Router();

router.get("/:id?", async (req, res) => {
    try {
        const { clienteId } = req;

        const result = await buscarPorId(req.params.id, clienteId);
        res.send(result);

    } catch (error) {
        res.status(500).send({ mensagem: error.message});
    }
});

router.post("/", async (req, res) => {
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