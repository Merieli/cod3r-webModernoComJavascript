const nome = 'Rebeca'
const concatenacao = 'Olá '+ nome + '!';
const template= `
    Olá
    ${nome}!`// dentro de colchetes com template string posso usar uma variável
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1+1}`)// dentro de colchetes com template string posso usar uma expressão matemática

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)// dentro de colchetes com template string posso usar um método