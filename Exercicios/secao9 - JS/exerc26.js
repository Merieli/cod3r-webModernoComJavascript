//Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.

const inverter = (objeto) => {
    let array = Object.entries(objeto);
    array.forEach((element) => element.reverse());
    return Object.fromEntries(array);
};

console.log(inverter({ a: 1, b: 2, c: 3 }));
