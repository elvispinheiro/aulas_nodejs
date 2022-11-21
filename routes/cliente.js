const {Router}= require("express");
// const { removeAllListeners } = require("nodemon");
const { criar, atualizar, remover, buscar } = require("../controllers/cliente");
const router = Router();

router.get("/:id?", async (req, res) => {

    const result = await buscar(req.params.id);

    res.send(result)
});

router.post("/", async (req, res) => {
    const result = await criar(req.body);

    res.send(result);
});

router.put("/:id", async (req, res) => {
    const result = await atualizar(req.params.id, req.body);     

    res.send(result);
});

router.delete("/:id", async (req, res) => {
    const result = await remover(req.params.id, req.body);

    res.send();
});

module.exports = router;