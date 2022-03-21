/*
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que faça cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

Atenção: A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.
*/
const objeto = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido",
};

const removerPropriedade = (objeto, propriedadeAremover) => {
    const novoObjeto = Object.assign({}, objeto);
    delete novoObjeto[propriedadeAremover];
    return novoObjeto;
};

console.log(removerPropriedade(objeto, "descricao"));
console.log(Object.is(removerPropriedade(objeto, "descricao"), objeto));

// ------- OU:
const removerPropriedade2 = (objeto, propriedadeAremover) => {
    const novoObjeto = { ...objeto };
    delete novoObjeto[propriedadeAremover];
    return novoObjeto;
};

console.log(removerPropriedade2(objeto, "descricao"));
console.log(Object.is(removerPropriedade2(objeto, "descricao"), objeto));
