const { Router } = require("express");
const { connection } = require("../models");
const { criar, buscarPorId, remover } = require("../controllers/pedido");
const router = Router();

router.get("/:id?", async (req, res) => {
    try {
        const result = await buscarPorId(req.params.id);
        res.send(result);

    } catch (error) {
        res.status(500).send({ mensagem: error.message});
    }
});

router.post("/", async (req, res) => {
    try {
        const pedidoCriado = await criar(req.body, req.body.produtos, req.body.enderecoEntrega);
        
        const result = await buscarPorId(pedidoCriado.id)

        res.send(result);
    } catch (error) {
        res.status(500).send({
            "mensagem": error.message,
        });
        
    }
});

router.put("/:id", (req, res) => {
    console.log(req.body);
    res.send("Atualizar pedido");
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