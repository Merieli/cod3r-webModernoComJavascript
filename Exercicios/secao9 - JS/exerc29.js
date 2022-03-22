// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

const estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
};

const ordenaAluno = (objeto) => {
    return Object.entries(objeto).map((element) => {
        return { nome: element[0], nota: element[1] };
    });
};

const melhorAluno = (listaEstudantes) => {
    const listaNotas = ordenaAluno(listaEstudantes);
    let listaMedias = 0;
    let maior = 0;

    listaNotas.forEach((element, indice, lista) => {
        const nota = element.nota;
        const divisor = nota.length;
        const total = nota.reduce((total, nota) => total + nota);

        element.media = total / divisor;
        delete element.nota;
        listaMedias = lista;
    });

    listaMedias.forEach((e, i, list) => {
        if (e.media > 0 || e.media > maior.media) {
            maior = e;
        }
    });

    return maior;
};

console.log(melhorAluno(estudantes));
