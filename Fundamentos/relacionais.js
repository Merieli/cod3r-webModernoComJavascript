const d1 = new Date(0) //é criado dentro da variável d1 uma nova data em que o 0 significa data de referencia que é 1/1/1970,
const d2 = new Date(0) 
console.log(d1 === d2) //o resultado será false porque a comparação é da referencia de memória
console.log(d1 == d2)//o resultado será false porque a comparação é da referencia de memória
console.log(d1.getTime() === d2.getTime())
console.log(undefined == null)
console.log(undefined === null)