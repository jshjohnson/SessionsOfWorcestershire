var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    package = require('./package.json'),
    sass = require('gulp-sass'),
    opn = require('opn');

var paths = {
    scripts : ['assets/script/src/**/*.js'],
    styles : ['assets/styles/scss/**/*.scss'],
    images : ['assets/images/**/*'],
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

gulp.task('html', function() {
    gulp.src(paths.html)
        .pipe(plugins.connect.reload());
});

// Reusable imagemin function
function imagemin() {
    return plugins.imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
    });
}

gulp.task('images-imagemin', ['images-svg-fallback'], function() {
    return gulp.src([paths.images[0], '!*.svg'])
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images'))
});

gulp.task('images-svgmin', function() {
    return gulp.src('images/**/*.svg')
        .pipe(plugins.svgmin())
        .pipe(gulp.dest('assets/images'))
});

gulp.task('images-svg-fallback', function() {
    return gulp.src('images/**/*.svg')
        .pipe(plugins.raster())
        .pipe(plugins.rename({extname: '.png'}))
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images'))
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

gulp.task('styles', function() {
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

gulp.task('images', ['images-svgmin', 'images-imagemin', 'images-svg-fallback']);
gulp.task('build', ['styles', 'scripts', 'images']);
gulp.task('dev', ['connect', 'watch']);
gulp.task('default', ['dev']);