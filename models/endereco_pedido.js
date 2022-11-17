const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endereco_pedido', {
    pedidoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedido',
        key: 'id'
      }
    },
    cep: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    logradouro: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    numero: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    complemento: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    bairro: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    cidade: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    uf: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'endereco_pedido',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "endereco_pedido_pkey",
        unique: true,
        fields: [
          { name: "pedidoId" },
        ]
      },
    ]
  });
};
