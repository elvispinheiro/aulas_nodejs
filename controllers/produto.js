const { produto } = require("../models");

const buscar = async (id = null) => {
    const atributos = ["nome", "valor", "descricao", "tipoProduto"];
    if (id) {
        return await produto.findByPk(id, {
            attributes: atributos
        });
    };
    return await produto.findAll({
        attributes: atributos
    });
};

const criar = async ({ nome, valor, descricao, tipoProduto }) => {
    const result = await produto.create({
        nome,
        valor,
        descricao,
        tipoProduto
    });
    return result;
};

const atualizar = async (id, { nome, valor, descricao, tipoProduto }) => {
    const result = await produto.update(
        {
            nome,
            valor,
            descricao,
            tipoProduto
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
    const result = await produto.destroy({
        where: {
            id
        }
    }
    );
    return result;
};


module.exports = {criar, buscar, atualizar, remover};