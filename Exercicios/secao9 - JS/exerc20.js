// Criar uma função que receba um array de números e retorne o menor número desse array.

const menorNumero = (array) => {
    const menor = array[1];
    array.forEach((element) => {
        if (element < menor) {
            menor = element;
            console.log("menor:" + menor);
        }
    });
    return menor;
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));
