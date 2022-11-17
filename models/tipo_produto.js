const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_produto', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.CHAR(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipo_produto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tipo_produto_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
