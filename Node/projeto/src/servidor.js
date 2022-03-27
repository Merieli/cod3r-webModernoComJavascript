const porta = 3003; // cada processo que precisa abrir uma conexão/comunicação com a Rede precisa de uma porta, que identifica um único processo dentro do computador, falicitando a seleção do mesmo, e caso queira usar uma porta padrão devo usar a porta 80 que é apadrão de uma requisição HTTP

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados"); //arquivo node importado em uma variavel

app.use(bodyParser.urlencoded({ extended: true })); //retorna uma função middleware que faz um parser no body da requisição

//requisição que possui como resposta uma função middleware
app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos()); //send converte o objeto para JSON automaticamente
});

app.get("/produtos/:id", (req, res, next) => {
    //traz um produto especifico baseado no atributo id
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    }); //como parametro para função salvarProduto() esta sendo passado um objeto que possui atributos de valores obtidos a partir do corpo da requisição
    res.send(produto);
});

app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto);
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
