const gulp = require("gulp");
const { series, parallel } = require("gulp");

//--Para importar o series que permite executar tarefas em serie "uma após a outra"
// const { series } = require('gulp') //dessa forma ao chamar a execução em series é preciso usar "gulp.series()"
//--ou da forma abaixo:
// const series = gulp.series; //dessa forma ao chamar a execução em series é possivel usar somente "series()"

const antes1 = (cb) => {
    console.log("Tarefa Antes 1!");
    return cb();
};

const antes2 = (cb) => {
    console.log("Tarefa Antes 2!");
    return cb();
};

function copiar(cb) {
    //gulp.src() - seleciona quais arquivos serão usados como entrada para o workflow da task
    // pipe() - realiza ou aplica tranformações seja em arquivos ou dados definidos para entrada da task, ele permite realzar diversas transformações encadeadas
    //gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])// forma de passar os arquivos 1 a 1
    gulp.src("pastaA/**/*.txt") //glob para copiar qualquer nova pasta e qualquer arquivo da pastaA em formato txt
        .pipe(gulp.dest("pastaB")); //dest() - insere o arquivo na pasta definidaa
    return cb(); //a função de callback será executada quando a tarefa for finalizada "o gulp precisa saber que a tarefa terminou"
}

const fim = (cb) => {
    console.log("Tarefa Final!");
    return cb();
};

// execução de tarefas de maneira sincrona "em sequencia um atras do outro"
module.exports.default = gulp.series(
    parallel(antes1, antes2), // execução de maneira assicrona "em paralelo"
    copiar,
    fim
);
