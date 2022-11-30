const { Router } = require("express");
const { check, body, validationResult, checkSchema } = require("express-validator");
const { criar, atualizar, remover, buscar } = require("../controllers/cliente");
const router = Router();
const verifyToken = require("../middlewares/auth");
const validation = require("../middlewares/validation");
const get = require("../schemas/cliente/get");
const post = require("../schemas/cliente/post");

router.get("/:id?", verifyToken, checkSchema(get), validation, async (req, res) => {
    try {
        const result = await buscar(req.params.id);
        res.send(result)
    } catch (error) {
        res.status(500).send({ mensagem: error.message })
    }
});

router.post("/", checkSchema(post), validation, async (req, res) => {
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