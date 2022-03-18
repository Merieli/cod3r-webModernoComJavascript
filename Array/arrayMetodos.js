// Quando um array é um const não é possível reatribuir essa variavel para outra coisa, mas continua sendo possível manipular o conteudo do array
const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

// Para remover o ultimo elemento do array
pilotos.pop();
console.log(pilotos);

// Adicionar um elemento na ultima posição
pilotos.push("Verstappen");
console.log(pilotos);

// Remove o primeiro elemento do array
pilotos.shift();
console.log(pilotos);

// Adiciona um elemento na primeira posição de indice 0 do array
pilotos.unshift("Hamilton");
console.log(pilotos);

//adiciona os elemntos a partir do indice definido
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// remove o elemento a partir do indice definido
pilotos.splice(3, 1);
console.log(pilotos);

//o slice dessa forma gera um novo array a partir do indice 2 definido
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

// para gerar um novo array a partir de um intervalo, sendo que o segundo parametro passado diz quando o metodo ira parar e nao puxa do array o elemento nesse indice
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
