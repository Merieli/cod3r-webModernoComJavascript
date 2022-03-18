// O map realiza uma tranformação do array atual para outro array sempre com o mesmo tamanho

const nums = [1, 2, 3, 4, 5];

// For com propósito
let dobro = nums.map(function (e) {
    return e * 2;
});

console.log(dobro);

// Passando varios maps de forma encadeada um após o outro
const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
