console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana"); //forma não recomendada de criar array
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

//Formas de adicionar um novo elemento ao array
aprovados[3] = "Paulo";
aprovados.push("Abia");
console.log(aprovados.length);

// Ao adicionar um valor para uma posição muito superios aos dados contidos no array, faz com que os valores até o indice definido sejam undefined
aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);

//Para ordernar um array:
aprovados.sort();
console.log(aprovados);

// para excluir um valor sem reordenar o array
delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];

// Para adicionar elementos a um determinado indice, remover elementos de um array ou remover e adicionar elementos ao mesmo tempo
aprovados.splice(1, 2); // primeiro passar como parametro o indice do elemento que quero iniciar, e depois o número da quantidade de elementos  que irei remover a partir desse indice
console.log(aprovados);
aprovados.splice(1, 2, "Elemento1", "Elemento2"); // para adicionar elementos basta escrever o valor entre aspas, e esses valores serao inseridos a partir do indice definido
