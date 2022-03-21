// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

const removerVogais = (texto) => {
    return texto
        .replace("a", "")
        .replace("e", "")
        .replace("i", "")
        .replace("o", "")
        .replace("u", "");
};

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));
