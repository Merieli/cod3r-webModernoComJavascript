const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

// Para invocar uma função retornada "e consequentemente invocar o objeto factory criado" na frente do require é preciso usar "()":
const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

// O valor em B sera o mesmo de A devido ao cache dos Modulos
contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

// Como o metodo de incremento não esta diretamente atribuido ao exports, mas a uma funçào que gera um novo objeto, criando novas instancias, o valor em C sera diferente de D
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
