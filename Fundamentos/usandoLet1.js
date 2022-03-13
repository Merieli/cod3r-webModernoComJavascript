let numero = 1
{
    let numero = 2 //escopo menor mais restrito é o que tem preferencia
    console.log('dentro=', numero) //caso dentro do bloco não tenha sido criado a variavel numero "ela não exista" o js irá procurar o mesmo nome de variável em um escopo maior, varrendo acima do código e coletando o valor da variavel número que está fora do bloco
}
console.log('fora=', numero)