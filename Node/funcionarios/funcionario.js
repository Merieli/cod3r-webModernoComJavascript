// Desafio: Obter a mulher chinesa com o menor salário

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

// axios é um client HTTP que faz requisições para obter informações de algo que está remoto
const axios = require("axios");

// pega a informação do servidor e quando a requisição retornar, aciona o método then e executa a função de obtenção da resposta
const chineses = (funcionario) => funcionario.pais === "China";
const chinesas = (chines) => chines.genero === "F";
const menorSalario = (salarioMenor, chinesa) => {
    return chinesa.salario < salarioMenor.salario ? chinesa : salarioMenor;
};

axios.get(url).then((response) => {
    const funcionarios = response.data;
    const chinesaMenorSalario = funcionarios
        .filter(chineses)
        .filter(chinesas)
        .reduce(menorSalario);
    console.log(chinesaMenorSalario);
});
