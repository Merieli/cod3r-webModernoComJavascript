// Para usar o File System
const fs = require("fs");

const produto = {
    nome: "Celular",
    preco: 1249.99,
    deconto: 0.15,
};

// Para escrever em um novo arquivo os dados do objeto "produto" convertido em formato JSON, é possível usar o .writeFile() do file system, passando primeiramente o caminho e nome do novo arquivo a ser gerado, depois da virgula o dado que será escrito no arquivo, e depois uma função de callback para tratamento de erros
fs.writeFile(
    __dirname + "/arquivoGerado.json",
    JSON.stringify(produto),
    (err) => {
        console.log(err || "Arquivo salvo!"); //caso não exista erro "seja nulo" irá exibir a mensagem de que o arquivo foi salvo
    }
);
