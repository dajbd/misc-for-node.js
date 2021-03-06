var isDev = true,
    isLivereload = false,
    // isLivereload = true,
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    less = require('gulp-less')

gulp.task('http-server', function() {
    connect.server({
        livereload: isLivereload,
        // dev-build 为了让server 访问到css
        root: ['src', 'dev-build']
    })
})

! function lessTask() {
    var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
        autoprefix = new LessPluginAutoPrefix({ browsers: ["android > 2", 'iOS > 5'] }),
        plugins = [autoprefix]

    gulp.task('less', function() {
        gulp.src("src/style/**/*.less")
            .pipe(less({
                plugins: plugins
            }))
            .pipe(gulp.dest('dev-build/style')) // 把css输出到less的原目录下，文件太多，很烦，还是弄到别的目录
    })

    gulp.task('less-dist', function() {
        var LessPluginCleanCSS = require('less-plugin-clean-css'),
            cleancss = new LessPluginCleanCSS({ advanced: true })

        plugins.push(cleancss)

        gulp.src("src/style/**/*.less")
            .pipe(less({
                plugins: plugins
            }))
            .pipe(gulp.dest('dist/style'))
    })
}()


gulp.task('watch', function(cb) {
    gulp.watch("src/style/**/*.less", ['less'])
})

gulp.task('livereload', function() {
    gulp.src(['src/style/**/*.less', 'src/**/*.html', 'src/script/**/*.js'])
        // .pipe(watch())
        // .pipe(watch('src/style/**/*.less'))
        .pipe(watch('dev-build/style/**/*.css'))
        .pipe(watch('src/script/**/*.js'))
        .pipe(connect.reload())
})

// png to jpg
gulp.task('ptj', function() {
    var gm = require('gulp-gm')
    gulp.src('src/image/**.png')
        .pipe(gm(function(gmfile) {

            return gmfile.resize(100, 100)
                // return gmfile.setFormat('jpg')

        }))
        .pipe(gulp.dest('dist'))
})


var devTask = ['less', 'watch', 'http-server']

if (isLivereload) {
    devTask.push('livereload')
}

gulp.task('dev', devTask)


var devTask = ['less-dist']

gulp.task('dist', devTask)
