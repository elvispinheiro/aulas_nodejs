const jwt = require("jsonwebtoken");
const { palavraChave } = require("../config/token.json");

const verifyToken = (req, res, next ) => {
    const token = req.headers.authorization;

    if ( !token ) {
        return res.status(401).send({mensagem: "Token nao informado"})
    }
    jwt.verify(token, palavraChave, (error, decoded) => {
        if (error) {
            return res.status(401).send({mensagem: "token invalido"})
        }

        next();

    })
};

module.exports = verifyToken;