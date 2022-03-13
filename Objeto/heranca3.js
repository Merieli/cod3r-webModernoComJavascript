const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //objeto filha1 criada tendo como protótipo o objeto pai
filha1.nome = 'Ana' //altera o nome do objeto filha1
console.log(filha1.corCabelo)


const filha2 = Object.create(pai, { //a partir do protótipo pai cria outros atributos para o objeto filha 2
    nome: { value: 'Bia', writable: false, enumerable: true } //writable false significa que o valor não aceita alteração, enumerable true permite que o valor seja listado pelo Object.keys
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) { //laço de repetição que percorre todas as propriedades do objeto filha2
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key} `)
} //.hasOwnProperty(key) analisa se a determinada propriedade pertence realmente ao objeto que vem antes do ponto "caso seja uma propriedade herdada de outro objeto ele retorna false"