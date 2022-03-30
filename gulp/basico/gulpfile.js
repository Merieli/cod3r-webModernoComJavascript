const gulp = require("gulp");

//--Para importar o series que permite executar tarefas em serie "uma após a outra"
// const { series } = require('gulp');
//--ou da forma abaixo:
const series = gulp.series;

function copiar(cb) {
    return cb; //a função de callback será executada quando a tarefa for finalizada "o gulp precisa saber que a tarefa terminou"
}
