const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//SEM USO DO CALLBACK
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


//COM O CALLBACK
const notasBaixas2 = notas.filter(function (nota){//função filter que filtra os elementos de um array com base nos critérios definidos entre parenteses
    return nota < 7
}) 
console.log(notasBaixas2)

//COM CALLBACK USANDO ARROW
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
