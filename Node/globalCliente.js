// Não é recomendado por padrão modificar o "glboal"
require("./global");

//para acessar o que esta dentro do modulo referenciado com o global não é preciso usar o nome do modulo antes, da seguinte forma:
console.log(MinhaApp.saudacao());

// mas também é possivel utilizando o nome do modulo:
console.log(global.MinhaApp.saudacao());

MinhaApp.nome = "Eita";
console.log(MinhaApp.nome);
