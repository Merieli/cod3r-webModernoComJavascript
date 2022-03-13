function Pessoa() {
    this.idade = 0
    //Set Intervaldispara uma outra função a partir de um determinado intervalo que é passado dentro de parênteses, sendo possível inclusive passar uma função anônima

    /*
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)*/ // a cada 1seg será executada essa função de incremento de idade
    //como o bind nesse caso está dentro da função pessoa que é onde se deseja usar o this basta definir entre parentes o this
    const self = this //dessa forma não importa quem esteja chamando a função, a variável self sempre irá apontar para o this da função Pessoa
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

//instancia da função pessoa:
new Pessoa 