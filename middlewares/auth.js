const jwt = require("jsonwebtoken");
const { palavraChave } = require("../config/token.json");
const validation = require("./validation");

const verifyToken = [
    check("authorization").notEmpty().withMessage("Token não informado").isJWT().withMessage("Token deve estar em formato JWT"), validation,
    (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send({ mensagem: "Token nao informado" })
        }
        jwt.verify(token, palavraChave, (error, decoded) => {
            if (error) {
                return res.status(401).send({ mensagem: "token invalido" })
            }

            req.clienteId = decoded.id;

            next();

        })
    }
]

module.exports = verifyToken;