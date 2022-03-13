console.log(soma(3, 4))

//function declaration - dessa forma antes da função ser declarada no código eu posso chamá-la
function soma(x, y){
    return x + y
}

//function expression - função atribuida a uma variavel const ou let/ dessa forma posso chamar a função somente depois dela ter sido declarada no código
const sub = function (x, y){
    return x - y
}
console.log(sub(3, 4))

//named function expression "vantajosa num momento de debugar um código para que o nome da função apareça no stack" / dessa forma posso chamar a função somente depois dela ter sido declarada no código
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
