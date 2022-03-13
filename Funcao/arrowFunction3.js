let comparaComThis = function (param) {
    console.log(this === param) //se o this for estritamente igual ao parametro passado ele retorna true
}

comparaComThis(global) //resultado será true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //devido ao uso do bind para redirecionar o this para "obj" irá dar false
comparaComThis(obj) //resultado será true porque o this já foi redirecionado para "obj"


//USANDO ARROW:
let comparaComThisArrow = param => console.log(this === param) //em uma função arrow o this aponta para o módulo corrente de onde a função foi definida
comparaComThisArrow(global) //devido ao comportamento da função arrow o resultado será false
comparaComThisArrow(this) //resultado será true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) 