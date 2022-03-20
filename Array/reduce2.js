const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
];

//Desafio 1: Retornar true/false para verificar se todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
const desafio1 = alunos.map((aluno) => aluno.bolsista).reduce(todosBolsistas);

console.log("Todos os alunos são bolsistas? " + desafio1);

//Desafio 2: Retornar true/false para verificar se algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => {
    console.log("desafio2: " + resultado, bolsista);
    return resultado || bolsista;
};
const desafio2 = alunos.map((aluno) => aluno.bolsista).reduce(algumBolsista);

console.log("Algum aluno é bolsista? " + desafio2);
