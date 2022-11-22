// iniciar a aplicação:
// const { Router } = require("express");
const express = require("express");
const app = express();
const cliente = require("./routes/cliente");
const tipo_produto = require("./routes/tipo_produto")
const produto = require("./routes/produto");
const pedido = require("./routes/pedidos");
const cep = require("./routes/cep");
const connection = require("./models");

app.use(express.json());
app.use("/produto", produto);
app.use("/tipoProduto", tipo_produto);
app.use("/cliente", cliente);
app.use("/pedido", pedido);
app.use("/cep", cep);

// definindo qual é a porta e colocando a aplicação para rodar:
app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");

});

