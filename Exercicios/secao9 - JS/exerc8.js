// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
const multiplica = (num1, multiplicador) => {
    if (num1 >= 0 && multiplicador >= 0) {
        return multiplicador === 1
            ? num1
            : num1 + multiplica(num1, multiplicador - 1);
    }
};

console.log(multiplica(7, 5));
