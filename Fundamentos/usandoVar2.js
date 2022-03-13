var numero = 1
{//as chaves aqui abrem um bloco e não uma função por isso a variavel numero não tem escopo local dentro desse bloco, mas escopo global e é reatribuido o valor de 2 a variavel numero
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora=', numero)