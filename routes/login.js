const { Router } = require("express");
const router = Router();
const { login } = require("../controllers/cliente");

router.post("/", async (req, res) => {
    try {
        const { email, senha } = req.body;

        const token = await login(email, senha);

        if ( !token ) {
            return res.status(401).send({message: "E-mail ou senha inválidos"})
        }
        
        res.send({ token });
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

module.exports = router;