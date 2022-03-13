class Lancamento {
    constructor(nome = 'Genérico', valor = 0){ //função que é chamada no momento em que a classe for instanciada, e é passado entre parentes os parâmetros para função construtora
        this.nome = nome; //adiciona ao objeto que esta sendo instanciado um atributo nome que recebe o valor passado no construtor por parâmetro
        this.valor = valor; //adiciona ao objeto que esta sendo instanciado um atributo valor que recebe o valor passado no construtor por parâmetro
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []; //recebe um array vazio
    };

    addLancamentos(...lancamentos){//metodo que é uma função que recebe um ou mais lançamentos que se deseja passar para que ao final ele concatena todos os lançamentos em um array
        lancamentos.forEach(l => this.lancamentos.push(l)); //realiza um laço de repetição a cada parametro de addLancamentos que pega o elemento e adiciona ao array lancamentos com o push
    };
    
    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor; //acrescenta a variavel valorConsolidado todos os valores inseridos no CicloFinanceiro
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());