console.log(this === global);
console.log(this === module);

// this é um objeto que é exatamente a referencia de module.exports, desde que não esteja dentro de uma função
console.log(this === module.exports);
// this também é o mesmo que esports, pois exports apotna para a mesma referencia de module.exports
console.log(this === exports);

function logThis() {
    console.log("Dentro de uma função...");
    console.log(this === module.exports);
    console.log(this === exports);
    console.log(this === global);

    this.perigo = "..."; //this apontando para global
}

this.perigo = "..."; //this apontando para module.exports fica público "visivel fora do módulo"
logThis();
