// iniciar a aplicação:
// const { Router } = require("express");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cliente = require("./routes/cliente");
const tipo_produto = require("./routes/tipo_produto")
const produto = require("./routes/produto");
const pedido = require("./routes/pedidos");
const cep = require("./routes/cep");
const connection = require("./models");
const login = require("./routes/login");
const verifyToken = require("./middlewares/auth");

app.use(express.json());
app.use(morgan("dev"));

app.use("/cep", cep);
app.use("/login", login);
app.use("/cliente", cliente);
app.use(verifyToken);
app.use("/produto", produto);
app.use("/tipoProduto", tipo_produto);
app.use("/pedido", pedido);


// definindo qual é a porta e colocando a aplicação para rodar:
app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");

});

