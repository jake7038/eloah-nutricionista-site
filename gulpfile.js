var gulp = require('gulp');
const imagemin = require('gulp-imagemin');


function comprimirimagem(){
    return gulp.src('./img/plano-de-fundo/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/plano-de-fundo'));
}

exports.comprimirimagem = comprimirimagem;