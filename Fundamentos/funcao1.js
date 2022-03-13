//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //pega o primeiro valor e para o segundo atribui undefined por isso retorna NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //pega os dois primeiros valores e ignora o resto
imprimirSoma()

//Funcao com retorno
function soma(a, b=1){//por padrão foi definido o valor de 1 a variável b
    return a + b
} 

console.log(soma(2, 3)) //como nesse caso para b foi reatribuido o valor 3 o resultado será 5
console.log(soma(2)) //como já foi definido o valor padrão de b como 1 o resultado será 3
console.log(soma()) //como para a não foi definido um valor o resultado será Na