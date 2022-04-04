const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function transformacaoJS(cb) {
    return gulp
        .src("src/**/*.js")
        .pipe(
            babel({
                comments: false, //comentarios nao serão transferidos pro arquivo final
                presets: ["env"], //irá pegar a versão mais nova do JS e converter pra um codigo mais antigo
            })
        )
        .pipe(uglify()) //deixa o codigo minificado
        .on("error", (err) => console.log(err)) //caso ocorra algum erro irá imprimi-lo
        .pipe(concat("codigo.min.js")) //concatena todos arquivos minificados no arquivo de nome definido entre parenteses
        .pipe(gulp.dest("build")); //define o destino do arquivo
}

function fim(cb) {
    console.log("Fim!!!!");
    return cb();
}

exports.default = series(transformacaoJS, fim);
