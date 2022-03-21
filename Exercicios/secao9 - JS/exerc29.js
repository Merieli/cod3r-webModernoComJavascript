// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

const estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
};

const melhorAluno = (listaEstudantes) => {
    const array = Object.entries(listaEstudantes);
    array.forEach(function (e) {});
    return console.log(listaEstudantes[0]);
};

console.log(melhorAluno(estudantes));
