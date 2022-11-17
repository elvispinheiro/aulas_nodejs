var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _endereco_pedido = require("./endereco_pedido");
var _pedido = require("./pedido");
var _produto = require("./produto");
var _produto_pedido = require("./produto_pedido");
var _tipo_produto = require("./tipo_produto");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var endereco_pedido = _endereco_pedido(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var produto = _produto(sequelize, DataTypes);
  var produto_pedido = _produto_pedido(sequelize, DataTypes);
  var tipo_produto = _tipo_produto(sequelize, DataTypes);

  pedido.belongsToMany(produto, { as: 'produtoId_produtos', through: produto_pedido, foreignKey: "pedidoId", otherKey: "produtoId" });
  produto.belongsToMany(pedido, { as: 'pedidoId_pedidos', through: produto_pedido, foreignKey: "produtoId", otherKey: "pedidoId" });
  pedido.belongsTo(cliente, { as: "cliente", foreignKey: "clienteId" });
  cliente.hasMany(pedido, { as: "pedidos", foreignKey: "clienteId" });
  endereco_pedido.belongsTo(pedido, { as: "pedido", foreignKey: "pedidoId" });
  pedido.hasOne(endereco_pedido, { as: "endereco_pedido", foreignKey: "pedidoId" });
  produto_pedido.belongsTo(pedido, { as: "pedido", foreignKey: "pedidoId" });
  pedido.hasMany(produto_pedido, { as: "produto_pedidos", foreignKey: "pedidoId" });
  produto_pedido.belongsTo(produto, { as: "produto", foreignKey: "produtoId" });
  produto.hasMany(produto_pedido, { as: "produto_pedidos", foreignKey: "produtoId" });
  produto.belongsTo(tipo_produto, { as: "tipoProduto_tipo_produto", foreignKey: "tipoProduto" });
  tipo_produto.hasMany(produto, { as: "produtos", foreignKey: "tipoProduto" });

  return {
    cliente,
    endereco_pedido,
    pedido,
    produto,
    produto_pedido,
    tipo_produto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
