//Clousure "que está envolta" é o escopo criado quando uma função é declarada "o escopo que envolve a função"
//Esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico em ação!

const x = 'Global'

function fora() {
//uma função JS é um clousure porque tem memória do local onde ela foi definida, e esse escopo que está externo a função também vai junto quando você acessa uma função 
    const x = 'Local'
    function dentro(){ //contexto da declaração: dentro da função "fora"
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
//quando é acessada ou executada a função no outro contexto totalmente diferente ela tem memória do local das suas origens