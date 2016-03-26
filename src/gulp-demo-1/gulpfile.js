var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch')


gulp.task('http-server', function() {
    connect.server({
        livereload: true,
        root: ['src']
    })
})


gulp.task('watch', function() {
    gulp.watch("style/*.less", ['less'])
})

gulp.task('livereload', function() {
    gulp.src(['src/style/*less', 'src/*html', 'src/script/*js'])
        .pipe(watch())
        .pipe(connect.reload())
})


gulp.task('default', ['http-server', 'watch', 'livereload'])
