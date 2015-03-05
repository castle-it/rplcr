var gulp = require('gulp');
var replace = require('gulp-batch-replace');

gulp.task('default', function() {
  console.log('hello, gulp');
});

var swaps = [
	['http://localhost', 'https://staging.castleworldwide.com'],
	["baseRealtimeUrl = 'https://staging", "baseRealtimeUrl = 'https://adestaging"]

];

gulp.task('stage_urls', function() {
  gulp.src(['file.js'])
    .pipe(replace(swaps))
    .pipe(gulp.dest('./stage/file.js'));

});