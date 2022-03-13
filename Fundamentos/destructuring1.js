//novo recurso do ES2015

const pessoa= {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // no contexto de objeto o Operador Destructuring é as chaves, nesse caso significa que estou tirando do objeto pessoa os atributos nome e idade e ficaram disponíveis como variáveis soltas "sem conexão com o objeto" a partir daqui no código
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //tira do objeto pessoa os atributos nome e idade e atribui para elas as variáveis n e i que irão receber os mesmos valores
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa //ao tirar atributos que não existem dentro de um objeto como é o caso de "sobrenome" o resultado será undefined, mas como para variável "bemHumorada" foi atribuido uma valor padrão de true ela mostra esse valor
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa //acessa os atributos numero e cep que estão dentro do atributo endereço, extraidos do objeto pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num}}= pessoa //ao tentar acessar atributos que não existem dentro de um objeto o código gera um erro