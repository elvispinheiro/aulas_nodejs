const { tipo_produto } = require("../models")

const buscar = async (id = null) => {
    if (id) {
        return await tipo_produto.findByPk(id, {
            attributes: ["id"]
        });
    };
    return await tipo_produto.findAll({
        attributes: ["id"]
    });
};

const criar = async ({ nome }) => {
    const result = await tipo_produto.create({
        nome
    });
    return result;
};


const atualizar = async (id, { nome }) => {
    const result = await tipo_produto.update(
        {
            nome,
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
    const result = await tipo_produto.destroy({
        where: {
            id
        }
    }
    );
    return result;
};


module.exports = { criar, atualizar, remover, buscar };