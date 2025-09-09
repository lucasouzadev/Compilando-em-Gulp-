const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

// Compressão de imagens
function comprimirImgs() {
    return gulp.src('./source/imgs/*')
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('./build/imgs'))
        .on('error', function(err) {
            console.error('Erro na compressão de imagens:', err);
        });
}

// Compressão de JavaScript
function comprimirJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
        .on('error', function(err) {
            console.error('Erro na compressão de JavaScript:', err);
        });
}

// Compilação de SASS
function compilarSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
        .on('error', function(err) {
            console.error('Erro na compilação SASS:', err);
        });
}

// Tarefa build que executa todas as compilações
const build = gulp.series(comprimirImgs, comprimirJS, compilarSass);

// Tarefa de watch para desenvolvimento
function watch() {
    // Watch para SASS
    gulp.watch('./source/styles/**/*.scss', 
        { ignoreInitial: false }, 
        compilarSass);

    // Watch para JavaScript
    gulp.watch('./source/scripts/*.js', 
        { ignoreInitial: false }, 
        comprimirJS);

    // Watch para imagens
    gulp.watch('./source/imgs/*', 
        { ignoreInitial: false }, 
        comprimirImgs);
}

// Exportar as tarefas
exports.comprimirImgs = comprimirImgs;
exports.comprimirJS = comprimirJS;
exports.compilarSass = compilarSass;
exports.build = build;
exports.watch = watch;
exports.default = watch;