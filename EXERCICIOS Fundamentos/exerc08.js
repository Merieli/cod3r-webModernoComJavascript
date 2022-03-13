let listaPontos = "10 20 20 8 25 3 0 30 1";

analise = lista => {
    let pontos = lista.split(" ");
    let melhorDesemp = pontos[0]
    let piorDesemp = pontos[0]
    let qtdMelhor = 0
    let piorJogo = 0
    for (let i in pontos){
        if(Number(pontos[i]) > melhorDesemp){
            melhorDesemp = pontos[i]
            qtdMelhor++
        } else if(pontos[i] < piorDesemp){
            piorDesemp = pontos[i]
            piorJogo = Number.parseInt(i) + 1
        }
    }
    let result = [];
    result.push(qtdMelhor)
    result.push(piorJogo)
    return result
}

console.log('Ele bateu o recorde ' + analise(listaPontos)[0] + ' vezes, e a sua pior pontuação aconteceu no jogo ' + analise(listaPontos)[1]);