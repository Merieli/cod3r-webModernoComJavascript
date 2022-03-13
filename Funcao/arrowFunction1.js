//EXEMPLO 1 DE USO FUNÇÃO ARROW:
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a//é possivel eliminar o uso dos parenteses quando se tem 1 único parâmetro na função arrow, no caso implicitamente o retorno é chamado mesmo que ele não foi escrito "porque o bloco da função {} não foi escrito se tivesse colocado o bloco obrigatoriamente precisaria escrever o return"
console.log(dobro(Math.PI))


//EXEMPLO 2 DE USO FUNÇÃO ARROW:
let ola = function (){
    return 'Olá'
}

ola = () => 'Olá' //função arrow sem parâmetros
ola = _ => 'Olá' //função arrow sem parâmetros, mas lembrando que underline é um parâmetro válido então ele deve ser ignorado na hora de chamar a função
console.log(ola())