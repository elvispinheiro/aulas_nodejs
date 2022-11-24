const { cliente } = require("../models");
const jwt = require("jsonwebtoken");
const { palavraChave } = require("../config/token.json");

const criar = async ({ nome, email, senha, cpf }) => {
    const [result, isNewRecord] = await cliente.findOrCreate({
        defaults: {
            nome,
            email,
            senha,
            cpf,
        },
        where: {
            email,
        },
    });

    console.log("novo registro", isNewRecord);

    return result;
};

const atualizar = async (id, { nome, senha, cpf }) => {
    const result = await cliente.update(
        {
            nome,
            senha,
            cpf,
        },
        {
            where: {
                id
            }
        }
    );

    return result;
};

const remover = async (id) => {
    const result = await cliente.destroy({
        where: {
            id
        }
    }
    );
    return result;
};

const buscar = async (id = null) => {
    const atributos = ["id", "nome", "email", "cpf"]
    if (id) {
        return await cliente.findByPk(id, {
            attributes: atributos,
        });
    };
    return await cliente.findAll({
        attributes: atributos,
    });
};

const login = async (email, senha) => {
    try {
        const result = await cliente.findOne({
            where: {
                email
            }
        });

        if (!result || result.senha !== senha) {
            return false;
        }
        
        return jwt.sign({ id: result.id }, palavraChave, {expiresIn: '24h'});
    } catch (error) {
        throw error;
    }
}

module.exports = { criar, atualizar, remover, buscar, login };