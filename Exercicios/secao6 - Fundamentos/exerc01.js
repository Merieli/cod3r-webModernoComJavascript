function operacao(a, b){
    let soma = a + b
    let mult = a * b
    let div = a / b
    return `Para os valores ${a} e ${b} temos:
    Somados = ${soma}
    Multiplicados = ${mult}
    Divididos = ${div}`
}

console.log(operacao(10, 30))