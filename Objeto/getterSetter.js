const sequencia = {
    _valor: 1, //underline na frente da variável é uma convenção para os desenvolvedores entenderem que ela é privada
    get valor() { return this._valor++ }, //pega o valor, retorna ele e acrescenta para o valor seguinte da sequencia
    set valor(valor) { 
        if(valor > this._valor){ //validação que só irá atribuir caso o valor esteja seja maior que o _valor
            this._valor = valor //atribui o valor recebido como parâmetro para a variável _valor
        }
    }
} 

//acessando variavel por metodo get e set
console.log(sequencia.valor, sequencia.valor)//o _valor não foi acessado e sim o seu atributo "valor" dessa forma o JS chama o método get, então o resultado desse console será 1 e 2
sequencia.valor = 1000 //reatribuição do valor usando get
console.log(sequencia.valor, sequencia.valor)//resultado será 1000 e 1001
sequencia.valor = 900 //reatribuição do valor usando get que é menor do que seu valor anterior dessa forma ele cai na validação e por ser menor a reatribuição é ignorada
console.log(sequencia.valor, sequencia.valor)//resultado será 1000 e 1001
