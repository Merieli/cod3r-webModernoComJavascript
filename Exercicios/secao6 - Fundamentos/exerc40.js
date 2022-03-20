function notas(nota){
    let conceito
    if (nota <= 4.9){
        conceito = 'D'
    } else if (nota > 4.9 && nota <= 6.9 ){
        conceito = 'C'
    } else if (nota >= 7.0 && nota <= 8.9){
        conceito = 'B'
    } else if (nota >= 9.0 && nota <= 10.0){
        conceito = 'A'
    }
    return `Nota ${nota}: ${conceito}`
}

console.log(notas(7.5))