var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var ngConstant = require('gulp-ng-constant');
var uglify = require('gulp-uglify');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('scripts', function() {
  gulp.src([
    './www/lib/ionic/js/ionic.bundle.min.js',
    './www/lib/ionic-material/dist/ionic.material.min.js',
    './www/lib/lodash/lodash.min.js',
    './www/lib/angular-simple-logger/dist/angular-simple-logger.min.js',
    './www/lib/angular-google-maps/dist/angular-google-maps.min.js',
    './www/lib/ngCordova/dist/ng-cordova.min.js',
    './www/lib/angular-messages/angular-messages.min.js',
    './www/js/app.js',
    './www/js/config.js',
    './www/js/controllers/**/*.js',
    './www/js/services/**/*.js'])
    .pipe(concat('bundle.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('config', function() {
  gulp.src('./config.json')
    .pipe(ngConstant())
    .pipe(gulp.dest("./www/js/"))
});

gulp.task('config-prod', function() {
  gulp.src('./config-prod.json')
    .pipe(ngConstant())
    .pipe(concat('config.js'))
    .pipe(gulp.dest("./www/js/"))
});
