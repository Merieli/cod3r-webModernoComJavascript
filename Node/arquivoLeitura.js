// Importação do módulo FileSystem interno do node:
const fs = require("fs");

const caminho = __dirname + "/arquivo.json";
// __dirname : é uma constante que está sempre disponível e presente em todos os arquivos/modulos do node que representa o caminho do diretório atual, dessa forma ao usá-la ela terá como contéudo o caminho do diretório do arquivo atual

// lendo arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, "utf-8"); //o encode utilizado na leitura do arquivo, deve ser o mesmo definido no arquivo que será lido
console.log(conteudo);

// lendo arquivo de forma assincrona
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo); //com o FS o arquivo precisa ser convertido para tipo objeto
    console.log(`${config.db.host}: ${config.db.port}`);
});

// Para ter acesso aos dados de um arquivo json convertido no formato de objeto:
const config = require("./arquivo.json");
console.log(config.db);

// para leitura de uma pasta com o file system
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta...");
    console.log(arquivos); //retorna um array com todos os arquivos do diretório, a partir dele é possível realizar verificações/validações com os arquivos
});
