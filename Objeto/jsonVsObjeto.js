// Json é um formato de dados usado para interoperabilidade entre sistemas, tendo um formato textual genérico que não carregue nada específico de um sistema/tecnologia, comunicando-se com diferentes e diversas tecnologias e linguagens. Por isso é muito utilizado em comunicação de sistemas.
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //função que gera o objeto passado entre parenteses para um formato textual JSON, "nesse caso a função soma é excluida do JSON porque JSON só recebe dados" Ou seja, converte Objeto para JSON

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))//gera erro porque foi escrito da forma errada
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))//gera erro porque foi escrito da forma errada

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))//transforma em JSON a string passada entre parenteses
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))//Formatos JSON válidos

// enscape \'string\'

// JSON validator ou JSON Lint sites na internet que verificam se o JSON tem formato válido