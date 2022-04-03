/*
 * Essa é uma calculadora bem legal!!!
 */
const Calculadora = {
    _resultado: 0,
    get resultado() {
        return this._resultado;
    },
    somar(a, b = 0) {
        const soma = a + b;
        this._resultado += soma;
        return this; //retornar o this em uma função permite que ela possa ser encadeada uma atras da outra para execução
    },
    potencia(a, b) {
        const potencia = a ** b;
        this._resultado += potencia;
        return this;
    },
    zerar() {
        this._resultado = 0;
        return this;
    },
    log() {
        console.log(this._resultado);
    },
};
