// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
const primeiro = (array) => array.shift();
const ultimo = (array) => array.pop();

const novoPrimeiroEUltimo = (array) =>
    array.filter((elemento) => {
        return elemento == primeiro(array) || elemento == ultimo(array);
    });

console.log(novoPrimeiroEUltimo([-100, "aplicativo", 16]));

//------------- OU:
const novoPrimeiroEUltimo1 = (array) => {
    const primeiro = array.shift();
    const ultimo = array.pop();
    return [primeiro, ultimo];
};

console.log(novoPrimeiroEUltimo1([-100, "aplicativo", 16]));
