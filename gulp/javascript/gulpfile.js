const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function padrao(cb) {
    gulp.src("src/**/*.js").pipe(
        babel({
            comments: false, //comentarios nao serão transferidos pro arquivo final
            presets: ["env"], //irá pegar a versão mais nova do JS e converter pra um codigo mais antigo
        })
    );
    return cb();
}
