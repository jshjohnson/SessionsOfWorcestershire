var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    package = require('./package.json'),
    sass = require('gulp-sass'),
    opn = require('opn');

var paths = {
    scripts : ['assets/script/src/**/*.js'],
    styles : ['assets/styles/scss/**/*.scss'],
    html : ['*.html']
};

var banner = [
  '/*! ',
  '<%= package.name %> ',
  'v<%= package.version %> | ',
  '(c) ' + new Date().getFullYear() + ' <%= package.author %> |',
  ' <%= package.homepage %>',
  ' */',
  '\n'
].join('');

gulp.task('connect', function() {
    plugins.connect.server({
        root: [__dirname],
        port: 8000,
        livereload: true
    });

    opn('http://localhost:8000');
});

gulp.task('html', function () {
    gulp.src(paths.html)
        .pipe(plugins.connect.reload());
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts[0])
        .pipe(plugins.plumber())
        .pipe(plugins.header(banner, { package : package }))
        .pipe(gulp.dest('assets/scripts/dist/'))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.uglify())
        .pipe(plugins.header(banner, { package : package }))
        .pipe(gulp.dest('assets/scripts/dist/'))
        .pipe(plugins.connect.reload());
});

gulp.task('styles', function () {
    gulp.src(paths.styles) 
        .pipe(plugins.sass().on('error', sass.logError))
        .pipe(plugins.autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        .pipe(plugins.header(banner, { package : package }))
        .pipe(gulp.dest('assets/styles/css/'))
        .pipe(plugins.csso())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.header(banner, { package : package }))
        .pipe(gulp.dest('assets/styles/css/'))
        .pipe(plugins.connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('dev', ['connect', 'watch']);