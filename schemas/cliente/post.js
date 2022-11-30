const { cpf } =require("cpf-cnpj-validator");

module.exports = {
    email: {
        in: ["body"],
        isEmail: true,
        normalizeEmail: true,

    },
    senha: {
        in: ["body"],
        isStrongPassword: {
            minLenght: 5,
        },

    },
    nome: {
        in: ["body"],
        trim: true,
        notEmpty:true,
    },
    cpf: {
        in: ["body"],
        custom: {
            options: (value) => {
                return cpf.isValid(value);
            }
        }
    }
}