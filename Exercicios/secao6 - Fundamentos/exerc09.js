aprovacao = nota => {
    resto = nota % 5;
    if (nota >= 38 && resto >= 2){
        nota = (nota - resto) + 5;
    } 

    if (nota < 40){
        console.log(`A nota foi [${nota}] : X Aluno Reprovado :(`);
    } else{
        console.log(`A nota foi [${nota}] : Aluno Aprovado!!! :D`);
    }
}

let nota = 105;
if (nota >= 0 && nota <= 100){
    aprovacao(nota)
} else{
    console.log("[ERRO!] Nota inválida!")
}