//função com parâmetros variáveis
function soma(){ //o fato de uma função não possuir parametros em JS não significa que não podem ser passados parâmetros
    let soma = 0
    for (i in arguments){ //pega o indice de cada elemento do array arguments
        soma += arguments[i] //pega cada um dos argumentos e soma
    }
    return soma
}

console.log(soma()) //retorna 0 porque a função foi chamada sem argumentos
console.log(soma(1.1, 2.2, 3.3)) //retorna a soma de todos os argumentos definido nessa sentença para a função e o resultado é 6.6
console.log(soma(1.1, 2.2, 'Teste')) //retorna a soma dos dois primeiros números e concatena com a string
console.log(soma('a', 'b', 'c')) //concatena do valor 0 de soma com as strings e o resultado é 0abc