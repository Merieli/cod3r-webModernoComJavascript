function rand([min = 0, max = 1000]){ //função que gera um número aleatório usando um array em que o valor minimo será 0 e o maximo 1000
    if (min > max) [min, max] = [max, min] //condicional em que caso o "min" seja maior que o "max" o operador destructuring irá inverter a ordem nas variáveis em um novo array com as variaveis desestruturadas
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

console.log(rand( [50, 40] ))
console.log(rand( [992] )) // passado somente o valor mínimo
console.log(rand([, 10])) //passado somente o valor máximo
console.log(rand([]))//array vazio que assume os valores padrões das variáveis
console.log(rand()) // nesse caso sem passar o array ele gera erro porque ele tenta desestruturar algo que está undefined ou nulo