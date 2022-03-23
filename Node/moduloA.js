// em node a aplicação é organizada em arquivos e pastas
// cada arquivo representa um módulo
// tudo que for escrito em um módulo será visível apenas nele, para tornar algo público/disponivel para outro arquivo é preciso exportá-lo e importar a partir de outro arquivo

// Todo arquivo Node começa com um objeto vazio
console.log(this);

// ---  Exportando módulos de forma dinamica com atributos
//tudo que for criado com "this." em um arquivo node poderá ser acessado por outro arquivo
this.ola = "Fala Pessoal";
// outra forma de exportar para outros arquivos é com o exports:
exports.bemVindo = "Bem vindo ao node";
// a terceira forma de exportar com o node é usando o module.exports:
module.exports.ateLogo = "Ate o proximo exemplo";
