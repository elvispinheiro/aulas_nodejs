const { options } = require("../../routes/pedidos");

module.exports = {
    clienteId: {
        in: ["body"],
        isInt: true,
        errorMessage: "Id inválido",
        optional: false
    },
    valorTotal: {
        in: ["body"],
        optional: false,
        isNumeric: true,
        custom: {
            options: (value, { req }) => {
                let valorTotal = 0;
                for (const item of req.body.produtos) {
                    valorTotal += parseFloat(item.valorTotal);
                }
                return value == valorTotal;
            }
        },
        errorMessage: "Valor dos produtos não conferem com o valor total" 
    },
    observacoes: {
        in: ["body"],
        optional: true,

    },
    produtos: {
        optional: false,
        in: ["body"],
        isArray: true,
        notEmpty: true,
    },
    "enderecoEntrega.cep": {
        in: ["body"],
        optional: false,
        errorMessage: "voce deve informar um cep",
    },
    "enderecoEntrega.loradouro": {
        in: ["body"],
        optional: false,
        errorMessage: "voce deve informar um logradouro"
    },
    verifyToken: {
        in: ["headers.authorization"],
        isJWT: true,
    }
}