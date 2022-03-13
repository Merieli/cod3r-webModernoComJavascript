const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //o atributo do objeto pessoa está sendo acessado com this
    }
}

//A forma abaixo é incorreta e gera erro porque o código não encontra o this fora do objeto:
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: fucional e Orientação a Objetos

//A forma abaixo é a CORRETA:
const falarDePessoa = pessoa.falar.bind(pessoa) //associada a função falar uso o bind para passar um objeto o qual se deseja resolver o "this", definindo dentro de parênteses a qual objeto o this da função "falar" pertence
falarDePessoa()