//CÓDIGO NÃO EXECUTÁVEL!!

//Procedural
processamento(valor1, valor2, valor3) //função que recebe um conjuntos de dados que são processados e manipulados na função

//OO - O foco mudou, se tem dados "atributos com valores" e dentro deles tem funções. O objeto é a figura central dentro de "OO"
objeto = { 
    valor1,//dados personalizados
    valor2,
    valor3,
    processamento() {
        //...
    }
}
objeto.processamento() 

//objeto é a capsula que agrupa comportamentos e atributos

//Principios importantes:
//1. abstração- quando é pego um objeto do mundo real e entendido como traduzir o objeto de forma simplificada para dentro do sistema (apenas com seus atributos e métodos necessários para o projeto)
//2. Encapsulamento - é ter os detalhes de implementação escondidos e mostrar uma interface simples para interação com determinado objeto (informações e detalhes que não são importantes para o projeto do sistema) (inteface de comunicação "o que o usuário precisa saber para se comunicar com o objeto, que está visível fora do objeto" da pessoa com o objeto "apenas o que é relevante para o usuário"). É importante porque o alto nível de acoplamento é ruim