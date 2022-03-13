console.log(7/0) //gera infinity

console.log("10" / 2) // por JS ser de Tipagem fraca essa operação funciona, gerando reusltado 5

console.log("3" + 2) // com sinal de concatenação a string prevalece e o resultado dessa operação é 32

console.log("3" - 2) // com sinal de menos o resultado dessa operação é 1

console.log("Show!" * 2) //gera NaN

console.log(0.1 + 0.7); //gera uma imprecisão

//console.log(10.toString()) 
//não é possível chamar um literal seguindo de ponto com uma função

console.log((10.345).toFixed(2)) //mas é possível chamar um literal dentro de parênteses

