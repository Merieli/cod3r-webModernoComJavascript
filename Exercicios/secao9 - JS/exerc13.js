// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

const filtrarNumeros = (array) =>
    array.filter(function (e) {
        return typeof e == "number";
    });

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));
