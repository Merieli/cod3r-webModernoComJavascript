const pessoa = {
    nome:'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //keys pega todas as chaves de um objeto "nome dos atributos"
console.log(Object.values(pessoa)) //values pega todas os valores de um objeto "valor dos atributos"
console.log(Object.entries(pessoa)) //entries pega todos os registros "chaves e valores" de um objeto "nome e valor dos atributos" e os retorna em um array com sub-arrays para o par chave-valor

Object.entries(pessoa).forEach(([chave, valor]) => { //usando operador destructuring com o array de entries de pessoa
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //caracteristica que define se essa propriedade será lista ao ser acessada "por exemplo com Object.keys"
    writable: false, //caracteristica que define se essa propriedade pode ser modificada/alterada
    value: '01/01/2019' //caracteristica que define o valor dessa propriedade
}) //define a propriedade de um objeto no caso de se desejar definir algumas carcterísticas dela de forma detalhada. Primeiro é definido entre parenteses qual objeto se deseja definir a propriedade, depois da virgula entre aspas é definido o nome da propriedade, depois de outra virgula é passado um objeto abrindo "{ }" onde dentro desse objeto é definido as caracteristicas da propriedade

pessoa.dataNascimento = '01/01/2017' //tentativa de alterar o valor do atributo que foi definido como writable false
console.log(pessoa.dataNascimento) //irá mostrar 01/01/2019 porque o atributo não pode ser reatribuido
console.log(Object.keys(pessoa)) //a lista de atributos vai mostrar o atributo dataNascimento porque enumerable foi definido como true

//Object.assign (ES6)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //dentro dos parenteses de assign é definido primeiro o objeto de destino, depois da virgula objeto que vai receber dados e quantos outros objetos forem desejados sempre separados por virgula "assign pega os atributos de todos objetos que forem passados como parametro e os concatena ao objeto de destino , e se o atributo já existir o novo valor será reatribuido"