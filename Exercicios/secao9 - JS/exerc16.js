/*
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.
*/

const checarAnoBissexto = (ano) => {
    const divisibleFour = ano % 4 == 0;
    const notDivisibleHundred = ano % 100 != 0;
    if (divisibleFour && notDivisibleHundred) {
        return true;
    } else if (divisibleFour && !notDivisibleHundred && ano % 400 == 0) {
        return true;
    }
    return false;
};

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));

//---------- OU:
const caseBissexto1 = (ano) => ano % 4 == 0 && ano % 100 != 0;
const caseBissexto2 = (ano) => ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0;

const checarAnoBissexto2 = (ano) => caseBissexto1(ano) || caseBissexto2(ano);

console.log(checarAnoBissexto2(2020));
console.log(checarAnoBissexto2(2100));
