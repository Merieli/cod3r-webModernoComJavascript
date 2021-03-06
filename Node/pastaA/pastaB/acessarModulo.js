// Para importar modulo em pastas acima "respeitar as letras maiusculas e minusculas do nome do arquivo"
const moduloA = require("../../moduloA");
console.log(moduloA.ola);

// Importando com caminho absoluto "obtido pelo VS code ao clicar com o botão direto do mouse sob o arquivo e depois em 'copy path'" (forma não recomendada):
const moduloA1 = require("/home/merieli/DEV/udemy-webmoderno-com-javascript-front/Node/moduloA.js");

console.log(moduloA1.ola);

// Importando um módulo da pasta node module (não é um boa pratica criar arquivos a partir da pasta node_modules, estes devem ser sempre instalados pelo npm)
const saudacao = require("saudacao"); // Toda pasta de um node module executa o arquivo "index.js"
console.log(saudacao.ola);

// Importar um modulo pronto pra uso Interno do Node
const http = require("http");
http.createServer((req, res) => {
    res.write("Bom dia");
    res.end();
}).listen(8080); //com isso abrira a url "http://localhost:8080/" no navegador executa o código

// Para importar um modulo node que tem como nome "index.js" basta referenciar a pasta em que o arquivo está que o node reconhece automaticamente que deve ser importado o arquivo index dessa pasta
const c = require("./pastaC");
console.log(c.ola2);
