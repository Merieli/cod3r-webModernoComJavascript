console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //this - significa que estou  pegando o nome associado ao objeto que for criado a partir desta função, ou seja, nesse caso o atributo 'nome' fica visivel para o objeto de nome 'Obj', ficando público. No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, seja em modo estrito ou não. Dentro de uma função, o valor de this depende de como a função é chamada.
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()