var gulp = require('gulp');
var batchReplace = require('gulp-batch-replace');

gulp.task('default', function() {
  console.log('Rewriting project URLs for staging...');
	var urlsSwaps = [
		['http://localhost', 'https://staging.kewlhost.com'],
		["baseRealtimeUrl = 'https://staging", "baseRealtimeUrl = 'https://adestaging"]

	];
	gulp.src(['./dev/urlFile.js'])
	.pipe(batchReplace(urlsSwaps))
	.pipe(gulp.dest('./stage/'));

	var hosts = {
		dev: 'development_server_name',
		stage: 'stage_server_name',
		prod: 'prod_server_name'
	};
	console.log('Rewriting project connection strings for staging...');
	var connHostFrag = 'Data Source=';
	var connSwaps = [
		[connHostFrag+hosts.dev, connHostFrag+hosts.stage]
	];

	gulp.src(['./dev/conn.txt'])
	.pipe(batchReplace(connSwaps))
	.pipe(gulp.dest('./stage/'));

});