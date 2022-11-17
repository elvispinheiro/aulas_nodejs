const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    email: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    senha: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    cpf: {
      type: DataTypes.CHAR(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cliente',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cliente_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
