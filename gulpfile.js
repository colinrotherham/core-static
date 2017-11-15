/**
 * Dependencies
 */

require('source-map-support/register');
require('@babel/register');

const task = require('@colinrotherham/core');
const config = require('./tasks/config.json');
const gulp = require('gulp');
const sequence = require('run-sequence');

/**
 * Child tasks
 */

gulp.task('clean', task.clean(config.clean));
gulp.task('copy', task.copy(config.copy, gulp));
gulp.task('css', task.css(config.css, gulp));
gulp.task('html', task.html(config.html, gulp));
gulp.task('img:optimise', task.img.optimise(config.img.optimise, gulp));
gulp.task('img:fallbacks', task.img.fallbacks(config.img.fallbacks, gulp));
gulp.task('js:webpack', task.js.webpack(config.js.webpack, gulp));
gulp.task('lint:a11y', task.lint.a11y(config.lint.a11y, gulp));
gulp.task('lint:css', task.lint.css(config.lint.css, gulp));
gulp.task('lint:html', task.lint.html(config.lint.html, gulp));
gulp.task('lint:js', task.lint.js(config.lint.js, gulp));
gulp.task('serve', task.serve(config.serve));
gulp.task('watch', task.watch(config));

/**
 * Main tasks
 */

// Shared code compile task
gulp.task('compile', done => {
	sequence(['lint:js', 'lint:css'], ['js:webpack', 'css'], done);
});

// Shared build tasks
gulp.task('build', done => {
	sequence(['compile', 'img:fallbacks'], ['html', 'img:optimise'], done);
});

// Default tasks
gulp.task('default', ['clean'], done => {
	sequence('copy', 'build', done);
});

// Test tasks
gulp.task('test', done => {
	sequence('lint:html', 'lint:a11y', done);
});

// Development tasks
gulp.task('dev', ['clean'], done => {
	sequence('default', ['watch', 'serve'], done);
});
