//task para rodar o projeto via servidor fazendo funcionar as requisições ajax
const gulp = require('gulp')
const webserver = require('gulp-webserver');
const watch = require('gulp-watch'); //permite sempre que houver uma mudança nos arquivos determinados serão executadas as tasks determinadas

function servidor(){
    return gulp.src('build/')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')()) //sempre que o HTML for alterado irá chamar a função appHTML
    watch('src/**/*.scss', () => gulp.series('appCSS')()) 
    watch('src/**/*.js', () => gulp.series('appJS')()) 
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')()) 
    return cb();
}

module.exports = {
    monitorarArquivos,
    servidor
}
