const {Router} = require("express");
const router = Router();

router.get("/:id?", (req, res) => {
    res.send("lista de pedidos");
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("Criar pedido");
});

router.put("/:id", (req, res) => {
    console.log(req.body);
    res.send("Atualizar pedido");
});

router.delete("/:id", (req, res) => {
    console.log(req.body);
    res.send("Remover pedido");
});

module.exports = router;