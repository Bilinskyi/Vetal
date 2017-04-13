'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename'),
sftp = require('gulp-sftp'),
concat       = require('gulp-concat'),
jsmin = require('gulp-jsmin'),
browserSync = require('browser-sync').create(),
imageop = require('gulp-image-optimization'),
del         = require('del'), 
autoprefixer = require('gulp-autoprefixer'),
spritesmith  = require('gulp.spritesmith'),
tiny = require('gulp-tinypng-nokey'),
gcmq = require('gulp-group-css-media-queries'),
cleanCSS = require('gulp-clean-css');



// gulp.task('browserSync', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: 'metallbox'
// 		},
// 	})
// })

// group @media only screen and (max-width: 991px) 
gulp.task('media', function () {
	gulp.src('metallbox/css/style.css')
	.pipe(gcmq())
	.pipe(gulp.dest('metallbox/css'));
});


// optimize image
gulp.task('tiny', function(cb) {
	gulp.src('metallbox/img/*')
	.pipe(tiny())
	.pipe(gulp.dest('image'));
});



gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "localhost:8888/metallbox/"
    });
});


gulp.task('images', function(cb) {
	gulp.src(['metallbox/img/**/*.png','metallbox/img/**/*.jpg','metallbox/img/**/*.gif','metallbox/img/**/*.jpeg']).pipe(imageop({
		optimizationLevel: 5,
		progressive: true,
		interlaced: true
	})).pipe(gulp.dest('img_optimized')).on('end', cb).on('error', cb);
});


gulp.task('sass', function () {
	return gulp.src('metallbox/sass/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions'], { cascade: true }))
	.pipe(gcmq())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('metallbox/css/'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

// gulp.task('styles', function () {
//   return gulp.src('metallbox/css/*.css')
//   .pipe(concatCss("style.css"))
//   .pipe(cleanCSS({compatibility: 'ie8'}))
//   .pipe(gulp.dest('dist/css'));
// });

gulp.task('scripts', function() {
	return gulp.src([ 
		'metallbox/js/**/*.js',
		'!metallbox/js/**/main.js',
		'!metallbox/js/**/main.min.js',
		'!metallbox/js/**/libs.min.js' 
		])
	.pipe(concat('libs.min.js')) 
	.pipe(jsmin()) 
	.pipe(gulp.dest('metallbox/js')); 
});

gulp.task('main', function() {
	return gulp.src([ 
		'metallbox/js/main.js'
		])
	.pipe(concat('main.min.js')) 
	.pipe(jsmin()) 
	.pipe(gulp.dest('metallbox/js')); 
});



// gulp.task('clean', function() {
// 	return del.sync('dist'); 
// });

// gulp.task('build', ['clean', 'images', 'sass', 'scripts' ], function() {

// 	var buildCss = gulp.src([ 
// 		'metallbox/css/*.css'
// 		])
// 	.pipe(gulp.dest('dist/css'))

// 	var buildFonts = gulp.src('metallbox/fonts/**/*') 
// 	.pipe(gulp.dest('dist/fonts'))



// 	var buildFancybox = gulp.src('metallbox/fancybox/**/*') 
// 	.pipe(gulp.dest('dist/fancybox'))

// 	var buildJs = gulp.src([
// 		'metallbox/js/main.js'
// 		]) 
// 	.pipe(gulp.dest('dist/js'))

// 	var buildHtml = gulp.src('metallbox/*.html') 
// 	.pipe(gulp.dest('dist'));

// });


gulp.task('sprite', function() {
	var spriteData = 
	gulp.src('metallbox/spr/*.*') 
	.pipe(spritesmith({
		imgName: 'sprite.png',
		imgPath: '../img/sprite.png',
		padding: 5,
		cssName: 'sprite.css',


		cssOpts: {
			cssSelector: function (item) {
				if (item.name.indexOf('-hover') !== -1) {
					return '.ico.' + item.name.replace('-hover', ':hover');
				}
				else {
					return '.ico.' + item.name;
				}
			}
		}

	}));

	spriteData.img.pipe(gulp.dest('metallbox/img/')); 
	spriteData.css.pipe(gulp.dest('metallbox/css/')); 
});




gulp.task('default', ['sass', 'browserSync'], function () {
	gulp.watch('metallbox/sass/**/*.scss', ['sass']);
// Reloads the browser whenever HTML or JS files change
gulp.watch('metallbox/*.html', browserSync.reload); 
gulp.watch('metallbox/*.css', browserSync.reload); 
gulp.watch('metallbox/*.php', browserSync.reload); 
gulp.watch('metallbox/js/**/*.js', browserSync.reload);
});
