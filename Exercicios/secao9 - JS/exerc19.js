// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.

const areaTriangulo = (base, altura) => {
    const area = (base * altura) / 2;
    return area.toFixed(2);
};

console.log(areaTriangulo(10, 15));
console.log(areaTriangulo(7, 9));
console.log(areaTriangulo(9.25, 13.1));
