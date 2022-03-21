// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
const contarPalavras = (string) => {
    const array = string.split(" ");
    return array.length;
};

console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));
