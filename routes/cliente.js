const {Router}= require("express");
const router = Router();

router.get("/:id?", (req, res) => {
    res.send("lista de clientes");
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("Criar cliente");
});

router.put("/:id", (req, res) => {
    console.log(req.body);
    res.send("Atualizar cliente");
});

router.delete("/:id", (req, res) => {
    console.log(req.body);
    res.send("Remover Cliente");
});

module.exports = router;