const { Router } = require("express");
const fetch = require("cross-fetch");
const router = Router();

router.get("/:cep", async (req, res) => {
    const {cep} = req.params;
    
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    res.send(data);
});

module.exports = router;