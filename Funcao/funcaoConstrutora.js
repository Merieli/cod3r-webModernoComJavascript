function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado 
    let velocidadeAtual = 0

    //método público 
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro //quando não passar parametros posso escrever a instância sem parenteses ou então deixar os parenteses com nada dentro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //resultado será function
console.log(typeof ferrari) //resultado será object