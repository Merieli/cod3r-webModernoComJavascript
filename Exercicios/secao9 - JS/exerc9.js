//Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
const repetir = (elemento, repeticao) => {
    const array = [];
    for (let indice = 0; indice < repeticao; indice++) {
        array.push(elemento);
    }
    return array;
};

console.log(repetir("programação", 7));
