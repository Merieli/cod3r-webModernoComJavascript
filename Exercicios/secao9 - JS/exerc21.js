// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

const tenteAsorte = (num) => {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    const valor = Math.floor(Math.random() * (max - min) + min);
    if (num == valor) {
        console.log(`Parabéns! O número sorteado foi o ${valor}`);
    } else {
        console.log(`Que pena! O número sorteado foi o ${valor}`);
    }
};

tenteAsorte(1);
tenteAsorte(2);
tenteAsorte(3);
tenteAsorte(4);
tenteAsorte(5);
tenteAsorte(6);
tenteAsorte(7);
tenteAsorte(8);
tenteAsorte(9);
tenteAsorte(10);
