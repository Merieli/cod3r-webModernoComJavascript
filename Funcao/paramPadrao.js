//ESTRATÉGIAS PARA GERAR VALORES PADRÕES DE PARÂMETRO PARA UMA FUNÇÃO

// estratégia 1 usada quando criar uma variável dentro de uma função e definir um valor padrão para ela:
function soma1(a, b, c){
    a = a || 1 //se não for passado um valor de parametro da variavel na função ela assume como valor padrão o 1
    b = b || 1 //se não for passado um valor de parametro da variavel na função ela assume como valor padrão o 1
    c = c || 1 //se não for passado um valor de parametro da variavel na função ela assume como valor padrão o 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) //usando a estratégia 1 ao passar "0" como parametro ele assume um valor false e por isso gera um bug e o resultado da soma não será 0, mas a soma dos valores padrões, ou seja, 3

//estrategia 2, 3 e 4 para gerar valor padrão:
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //estrategia 2: quando o a for diferente de undefined ele pega o valor passado por parâmetro para a, e caso ele seja undefined irá assumir o valor de 1
    b = 1 in arguments ? b : 1 //estrategia 3: se nos arguments de b existir o indice 1 ele pega o valor passado por parâmetro para b, e se não houver arguments armazenados irá assumir o valor de 1
    c = isNaN(c) ? 1 : c //estrategia 4: se o c for do tipo NaN ele irá assumir o valor de 1, e se não for um NaN "sendo um valor numérico" ele pega o valor passado por parâmetro para c.
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) //o resultado dessa forma ainda pode causar confusão ou algum bug

//padrão do ES2015
function soma3(a = 1, b = 1, c = 1){//a forma correta de atribuir valores padrões atualmente para uma função é defini-los dentro do parenteses que precede a function
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))//o resultado da função será de acordo com os valores que foram ou não passados, sendo que os parâmetros assumem o valor padrão de 1 quando há ausência da declaração de um valor na chamada, sendo assim o resultado das somas será: 3, 5, 6 e 0