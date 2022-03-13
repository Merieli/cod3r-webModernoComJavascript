//Object.preventExtension() - cria um objeto previnindo e impedindo que ele seja extendido ou seja, não é possível adicionar mais atributos ao objeto, somente excluir ou alterar o valor dos já existentes.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto)) //isExtensible() - função que testa se o objeto passado entre parenteses foi criado com o preventExtension() retornando false se não for extensivel ou se for extensivel retorna true.

produto.nome = 'Borracha'; //permite alterar
produto.descricao = 'Borracha escolar branca'; //não é criado o atributo descrição porque produto não é extensivel
delete produto.tag; //permite excluir
console.log(produto);

//Object.seal() - sela o objeto definido entre parenteses impendido de adiciona novos atributos ou excluir atributos, mas é somente possível modificá-los
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'; //não permite modificar
delete pessoa.nome; //não permite excluir
pessoa.idade = 29 //permite alterar
console.log(pessoa)

//Object.freeze = selado + valores constantes, objeto totalmente constante e congelado, que não permite excluir, nem modificar, nem adicionar novos atributos.