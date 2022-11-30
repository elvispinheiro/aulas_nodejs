const { validationResult } = require("express-validator")

module.exports = (req, res, next) => {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
        return res.status(400).send({ mensagem: "Dados inválidos", erros: erros.array()});
    }

    next();
}