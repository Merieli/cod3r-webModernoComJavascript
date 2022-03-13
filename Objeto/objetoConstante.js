//
const pessoa = { nome: 'Joao'} //a const "pessoa" aponta para um endereço de memória "ex: 123", e é no endereço que tem o objeto criado, sendo assim o que está dentro do objeto pode ser alterado, só não pode ser alterado o objeto "pessoa"
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = { nome: 'Ana' } // fazendo dessa forma pessoa vai receber um novo objeto que está em outro endereço de memória que aponta para um novo objeto, tentando assim alterar o endereço de memória de pessoa, mas isso gera um erro porque não pode atribuir para pessoa um outro objeto

Object.freeze(pessoa) //método para congelar o objeto pessoa, fazendo com que não seja mais possível mexer no objeto, dessa forma se houver uma tentativa de alteração ou exclusão no objeto, não vai acontecer nenhum erro e o objeto permanecerá inalterado

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome


//PARA CRIAR UM OBJETO QUE NÃO PODE SER ALTERADO:
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria' //tentativa de alterar o valor do atributo nome do objeto "pessoaConstante"
console.log(pessoaConstante) //retorna nome com Joao ignorando a tentativa de