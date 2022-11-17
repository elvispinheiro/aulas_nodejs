const { Sequelize } = require("sequelize");
const { initModels } = require("./init-models");

const options = {
    username: "postgres",
    password: "postgres",
    database: "ecommerce",
    host: "localhost",
    dialect: "postgres",
};

const connection = new Sequelize(options);
connection.authenticate().then(() => console.log("Conectado ao banco de dados"))
    .catch((erro) => console.log("Erro ao conectar ao banco de dados", erro));

let db = initModels(connection);
db = { ...db, connection };

module.exports = db;