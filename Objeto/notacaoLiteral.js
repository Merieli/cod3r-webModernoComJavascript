const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c} //forma nova ES6 automaticamente os atributos do objeto recebem os valores atribuidos as variáveis na declaração acima

//Criando dinamicamente o atributo de um objeto usando uma variável
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}//objeto literal criado
obj3[nomeAttr] = valorAttr //notação literal
console.log(obj3)

const obj4 = {[nomeAttr] : valorAttr} //notação literal versão nova, entre colchetes é a constante que se quer usar para criar o atributo do objeto e depois de dois pontos o valor dele
console.log(obj4)


//Definindo funções em um objeto literal

const obj5 = {
    funcao1: function(){//Forma antiga tradicionalde acrescentar função
        //...
    },
    funcao2() {//Forma nova reduzida de acrescentar função
        //...
    }
}

console.log(obj5)