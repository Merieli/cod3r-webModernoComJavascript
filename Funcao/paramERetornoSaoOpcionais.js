function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))//é possível passar mais parametros do que a função suporta, mas os que não serão usados vao ser ignorados
console.loh(area(5, 5))