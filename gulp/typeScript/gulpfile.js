const { series } = require("gulp");
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json"); //define o arquivo de configuração que o compilador do Typescript irá usar

function transformacaoTS() {
    return tsProject
        .src() //pega todo o codigo fonte do projeto de acordo com o arquivo de configuração
        .pipe(tsProject()) //responsavel por realizar o processo de compilaçao
        .pipe(gulp.dest("build"));
}

exports.default = series(transformacaoTS);
