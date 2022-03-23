// importando modulos e alocando eles em uma variável
//No node ao importar arquivos do tipo JS não é preciso escreve "nomeArquivo.js"
const moduloA = require("./moduloA");
const moduloB = require("./moduloB");

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);
