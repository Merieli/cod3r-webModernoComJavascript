// Process: Entrada e Saída Padrão

const anonimo = process.argv.indexOf("-a") !== -1; // Pega a execução do node de uma determinada flag pelo terminal "no caso a flag -a"
console.log(anonimo);

if (anonimo) {
    process.stdout.write("Fala Anônimo!\n"); //pega a saida padrão do processo e escreve o texto passado entre parenteses
    process.exit();
} else {
    process.stdout.write("Informe o seu nome: ");
    process.stdin.on("data", (data) => {
        //pega a entrada padrão do processo quando ocorrer o evento de digitação + Enter "entrada de dados"
        const nome = data.toString().replace("\n", ""); //Pega a string digitada removendo o enter do final
        process.stdout.write(`Fala ${nome}!!\n`);
        process.exit();
    });
}
