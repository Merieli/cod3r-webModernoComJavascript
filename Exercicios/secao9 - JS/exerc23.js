// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

const contarCaractere = (caractere, string) => {
    count = 0;
    posicao = string.indexOf(caractere);
    while (posicao != -1) {
        count++;
        posicao = string.indexOf(caractere, posicao + 1);
    }
    return count;
};
console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));
