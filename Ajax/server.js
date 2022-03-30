// body-parser é responsável por fazer o parser do body da requisição, ao realizar um request ele pega os dados, interpreta e deixa eles prontos para manipulação
const bodyParser = require("body-parser");
const express = require("express");
const { functions } = require("lodash");
const app = express(); //express precisa estar instanciado

// dentro da pasta atual do arquivo irá servir todos os arquivos estaticos (html, css, fontes, etc)
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/teste", (req, res) => res.send("OK")); //para a pagina /teste ira exibir OK

//multer interpreta o formulario do upload
const multer = require("multer");

const storage = multer.diskStorage({
    //função disponibilizada pelo multer que recebe um objeto para configurar/personalizar a pasta/nome dos arquivos
    destination: function (req, file, callback) {
        callback(null, "./upload");
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
    upload(req, res, (erro) => {
        if (erro) {
            return res.end("Ocorreu um erro");
        }

        res.end("Concluído com sucesso!");
    });
});

//para o arquivo Fetch2:
app.post("/formulario", (req, res) => {
    //função middleware para tratar requisições do tipo post para formulario
    res.send({
        ...req.body,
        id: 1,
    });
});

/*
--Formas de receber dados no Front-End com o Express:
    req.body

    req.query //quando é feito um get que em sua consulta na url é inserido "?" e os parametros da requisição get, exemplo "urlteste/pagina?numero=1"

    req.params //permite usar parametros pre-definidos interpretados diretamente na url passada no node para a requisição, exemplo "app.get('/parOuImpar/:numero',..."
 */

//para o arquivo Axios2:
app.get("/parOuImpar", (req, res) => {
    //
    const par = parseInt(req.query.numero) % 2 === 0;
    res.send({
        resultado: par ? "par" : "impar",
    });
});

app.listen(8080, () => console.log("Executando..."));
