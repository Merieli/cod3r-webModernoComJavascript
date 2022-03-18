// Nao considerar para uso os dados desse documento, é apenas uma simulação para demonstrar que o array é um objeto

const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" };
console.log(quaseArray);
Object.defineProperty(quaseArray, "toString", {
    value: function () {
        return Object.values(this);
    },
    enumerable: false,
});

console.log(quaseArray[0]);

const meuArray = ["Rafael", "Ana", "Bia"];
console.log(quaseArray.toString(), meuArray);
