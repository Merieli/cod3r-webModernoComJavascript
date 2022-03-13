Object.prototype.attr0 = '0' //nâo é recomendavel fazer esse tipo de manipulaçâo porque ela impacta na estrutura toda de objetos

const avo = { attr1: 'A' } /* o avô tem como protótipo o Object.prototype */
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } /* "__proto__: avo" referencia que o objeto pai tem como protótipo o objeto avo */
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) /* o filho, nem o pai, nem o avo tem o "attr0" por isso retorna undefined */

//  Quando o atributo é encontrado no objeto determinado ele nâo procura esse mesmo atributo na cadeia de protótipos

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) { //delta é a acelerção desejada
        if (this.velAtual + delta <= this.velMax){ //se a velocidade atual + aceleração for menor ou igual a velocidade maxima
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing acontece a partir do momento em que o objeto carro se torna um prototipo de ferrari
}

const volvo = {
    modelo: 'V40',
    status() { //super referencia o protótipo assim como this referencia o objeto atual
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //foi estabelecida uma relação entre ferrari e carro, estabelendo portanto que ferrari tem o carro como seu protótipo "dentro de parentesesé passado o objeto e depois o prototipo desse objeto"
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())
