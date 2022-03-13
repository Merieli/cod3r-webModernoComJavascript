class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{ //extends define que uma determinada classe que vem antes e a classe que vem depois como protótipo, ou que uma determinada função gerada a partir da classe que vem antes tem como protótipo outra função da classe que vem depois
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome); //funcao super que chama a função construtora ou construtor da super classe "que no caso a super classe de Pai é o Avo", e instancia o parâmetro sobrenome da classe protótipo
        this.profissao = profissao; //atribui profissao ao objeto que foi instanciado e define a ele o atributo profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva'); //super chamando só o sobrenome primeiro parâmetro da class Pai
    }
}

const filho = new Filho
console.log(filho)