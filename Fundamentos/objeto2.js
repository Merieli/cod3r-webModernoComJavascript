console.log(typeof Object) //funcao
console.log(typeof new Object) //objeto criado a partir de uma funcao

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}//ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

