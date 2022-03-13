soma = (a, b) => `R$${(a + b).toFixed(2).replace('.',',')}`
console.log(soma(0.1, 0.2))