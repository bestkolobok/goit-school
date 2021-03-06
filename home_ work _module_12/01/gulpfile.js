/*Написать простую Gulp задачу, с именем 'TS', которая берет все файлы с раширением .ts из папки A и 
выбрасывает в папку B.

Написать простую Gulp задачу слежения, с именем 'watch:ts', которая следит за всеми файлами в папке A, 
и при изменении любого файла с раширением .ts, выполняет таск с именем 'TS'.

Написать npm скрипт с именем 'build:ts', который выполняет gulp задачу с имнем 'watch:ts'*/

const gulp = require('gulp');

gulp.task('TS', () => {
    return gulp
        .crs('A/**/*.ts')
        .pipe(gulp.dest('B'))
})

gulp.task('watch:ts', () => {
    return gulp.watch('A/**/*.ts', ['TS'])
})


{
    "scripts": {
        "build:ts": "gulp watch:ts"

    }
}
