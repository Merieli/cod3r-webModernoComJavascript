// Reduce é usado para reduzir e agregar os valores do array para um único resultado
const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
];

console.log(alunos.map((a) => a.nota));
//Somando todos os valores de um array:
const resultado = alunos
    .map((a) => a.nota)
    .reduce(function (acumulador, atual) {
        // o acumulador pode ser um array, um objeto, diversos tipos
        console.log(acumulador, atual);
        return acumulador + atual;
    });

// Somando todos os valores de um array considerando um valor inicial de 10 para a soma
const resultado2 = alunos
    .map((a) => a.nota)
    .reduce(function (acumulador, atual) {
        console.log(acumulador, atual);
        return acumulador + atual;
    }, 10);

console.log(resultado);
console.log(resultado2);
