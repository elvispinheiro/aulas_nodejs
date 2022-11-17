const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'id'
      }
    },
    realizadoEm: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    valorTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    observacoes: {
      type: DataTypes.CHAR(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pedido',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pedido_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
