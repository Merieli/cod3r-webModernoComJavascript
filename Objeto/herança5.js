console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// Todas as funçoes acima String, Array e Object tem um atributo chamado .prototype

String.prototype.reverses = function () {
    return this.split('').reverse().join('') //split pertence a String que gera um array que é revertido com o reverse e entao tudo é unido com o join criando-se uma nova string invertida
}
console.log('Escola Cod3r'.reverses())

Array.prototype.first = function() {
    return this[0];
} //forma de adicionar um método a uma função
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// NAO SUBSTITUIR COMPORTAMENTOS GLOBAIS QUE JÁ EXISTAM POIS PODE GERAR PROBLEMAS
String.prototype.toString = function () { //é possível substituir funções que já existem no protótipo da string, dessa forma sobrescrevendo o comportamento de toString
    return 'Lascou tudo'
}
