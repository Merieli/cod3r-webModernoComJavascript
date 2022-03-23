// Para importar modulo em pastas acima "respeitar as letras maiusculas e minusculas do nome do arquivo"
const moduloA = require("../../moduloA");
console.log(moduloA.ola);

// Importando com caminho absoluto "obtido pelo VS code ao clicar com o botão direto do mouse sob o arquivo e depois em 'copy path'" (forma não recomendada):
const moduloA1 = require("/home/merieli/DEV/udemy-webmoderno-com-javascript-front/Node/moduloA.js");

console.log(moduloA1.ola);

// Importando um módulo da pasta node module
const saudacao = require("saudacao"); // Toda pasta de um node module executa o arquivo "index.js"
console.log(saudacao.ola);

// Importar um modulo Interno do Node
const http = require("http");
http.createServer((req, res) => {
    res.write("Bom dia");
    res.end();
}).listen(8080); //com isso abrir a url "http://localhost:8080/" no navegador executa o código
