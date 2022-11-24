const { Router } = require("express");
// const { removeAllListeners } = require("nodemon");
const { criar, atualizar, remover, buscar } = require("../controllers/cliente");
const router = Router();
const verifyToken = require("../middlewares/auth");

router.get("/:id?", verifyToken, async (req, res) => {
    try {
        const result = await buscar(req.params.id);
        res.send(result)
    } catch (error) {
        res.status(500).send({ mensagem: error.message })
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await criar(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const result = await atualizar(req.params.id, req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message});
    }
});

router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const result = await remover(req.params.id, req.body);
        res.send();
    } catch (error) {
        res.status(500).send({ mensagem: error.message});
    }
});

module.exports = router;