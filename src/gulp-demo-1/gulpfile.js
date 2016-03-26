var gulp = require('gulp')
var connect = require('gulp-connect')


gulp.task('http-server', function() {
    connect.server()
})


gulp.task('default', ['http-server'])
