console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

// O exports é só que exporta a referencia do objeto, portanto é impossivel reatribuir um valor através dele
exports = null;
console.log(module.exports);

exports = {
    nome: "Teste",
};
console.log(module.exports);

// Maneira correta de reatribuir um valor de uma variavel do modulo para ser exportado:
module.exports = {
    publico: true,
};
