const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_pedido', {
    pedidoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedido',
        key: 'id'
      }
    },
    produtoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'produto',
        key: 'id'
      }
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valorTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'produto_pedido',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_pedido_pkey",
        unique: true,
        fields: [
          { name: "pedidoId" },
          { name: "produtoId" },
        ]
      },
    ]
  });
};
