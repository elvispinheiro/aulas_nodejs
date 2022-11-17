const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.CHAR(200),
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipoProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_produto',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
