//No contexto de Array o Operador Destructuring é os colchetes []. Exemplo:

const [a] = [10] //na declaração de uma variavel, quando o nome da variavel está envolvido entre colchetes também é um operador destructuring
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]//dentro de uma variavel array o primeiro elemento sera ignorado, e o segundo elemento será um novo array em que o primeiro elemento também é ignorado e o segundo elemento é uma variavel nota, sendo que foram atribuidos valor aos elementos ignorados e a variável nota (6) //Deve se evitar essa escrita de código por ser de confuso entendimento, mas é algo possível em JS 
console.log(nota) 