function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){ //novo recebe f que é uma função construtora e um conjunto de parametros 'usando o operador ... spread rash que recebe um array' que se deseja passar para o objeto
    const obj = {} //objeto vazio criado
    obj.__proto__ = f.prototype //o prototipo do obj vai apontar para função .prototype, é o mesmo que acontece ao usar o new com uma fução construtora
    f.apply(obj, params) //será aplicado o aplly na função, passando como primeiro parametro o obj ´que será o this´ e como segundo parametro um array params
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)