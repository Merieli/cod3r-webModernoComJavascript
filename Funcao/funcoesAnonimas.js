const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){ //funcao anonima criada dentro de uma variável
    console.log(operacao(a,b))
}

imprimirResultado(3, 4) //chamando a execução da função anonima
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){ //função anonima como um parâmetro diretamente na chamada para a funcao "imprimirResultado"
    return x - y 
})//o resultado será -1 porque a função anonima que subtrai os valores substituiu a função de soma que estava dentro da função "ImprimirResultado"
imprimirResultado(3, 4, (x, y) => x * y) //arrow function anonima como um parâmetro diretamente na chamada para a funcao "imprimirResultado"

//Função anonima como valor do atributo de um objeto:
const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()