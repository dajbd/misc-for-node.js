var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    hasLivereload = false


gulp.task('http-server', function() {
    connect.server({
        livereload: hasLivereload,
        root: ['src']
    })
})

gulp.task('less', function() {
    var LessPluginCleanCSS = require('less-plugin-clean-css'),
        LessPluginAutoPrefix = require('less-plugin-autoprefix'),
        cleancss = new LessPluginCleanCSS({ advanced: true }),
        autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] })

    gulp.src("src/style/**/*.less")
        .pipe(less({
            plugins: [autoprefix, cleancss]
        }))
        .pipe(gulp.dest('src/style'))
})

gulp.task('watch', function(cb) {
    watch('src/style/**/*.less', function() {
        gulp.src('src/style/**/*.less')
            .pipe(watch('src/style/**/*.less'))
            .pipe(less())
            .pipe(connect.reload())
            .on('end', cb)
    })

    watch('src/script/**/*.js', function() {
        gulp.src('src/script/**/*.js')
            .pipe(watch('src/script/**/*.js'))
            .pipe(connect.reload())
            .on('end', cb)
    })

    // 这应该是旧版watch的写法
    // gulp.watch("src/style/**/*.less", ['less'])
})

gulp.task('livereload', function() {
    gulp.src(['src/style/**/*.less', 'src/**/*.html', 'src/script/**/*.js'])
        // .pipe(watch())
        .pipe(watch('src/style/**/*.less'))
        .pipe(watch('src/script/**/*.js'))
        .pipe(connect.reload())
})



var defaultTask = ['less', 'watch', 'http-server']

if (hasLivereload) {
    defaultTask.push('livereload')
}

gulp.task('default', defaultTask)
