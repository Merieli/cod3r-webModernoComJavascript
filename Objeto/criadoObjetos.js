//usando a notação literal "não é o mesmo que JSON"
const obj1 = {} 


//Object em JS
const obj2 = new Object


//Funções construtoras
function Produto (nome, preco, desc){
    this.nome = nome //a variável nome foi transformada em uma variável pública "não está encapsulada mas visivel para fora do objeto"
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)//o valor de preco e desc estão encapsulados "não são disponíveis para fora do objeto"
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15) //nova instancia de produto passando os parametros para seus atributos
const p2 = new Produto('Notenook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


// usando a função create "Object.create"
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')//dentro de parse está sendo passado um objeto JSON, esse objeto possui o atributo info e está atribuido a variável fromJSON
console.log(fromJSON.info) 