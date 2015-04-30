var Assembler = require('assembler-cli');
// var Assembler = require('assembler');
var gulp = require('gulp');

var assembler = Assembler(gulp, {
	// port: '8080', // any server settings can be put into the main options, or within a server object
	production: {
		minify: false,  // any env specific settings can override global settings
	},
	development: {
		// server settings can be put into a server object
		// server:{
			// liveReload: false // stops liveReload from starting
		// }
	},
	test: {
		LOG_TRANSITIONS : true
	},
	paths:{
		// scripts: 'js'
	},
	// beautify: true,  // global
	minify: false,
	vendorFiles:{

	}
})
.queue('clean')
.queue('bower')
.async('public')
.async('html')
.async('scripts')
.async('styles');

// assembler.use('assembler-gsap'); // libraries not yet fully implemented

assembler.import('{bower}/gsap/src/minified/TweenMax.min.js');  // import vendor library

/*

//  api goal

var assembler = Assembler({
	// global and env config
})
.queue('init')  // adding a queue will push async and queue calls after it completes
.async('scripts', {
	type: 'normal', // default
	// type: 'coffeeScript',
	// type: 'typeScript',
	// type: 'emberScript'
})
.async('styles', {
	// type: 'normal' // default
	type: 'sass',
	// type: 'less'
})
.queue('deploy', {
	
})
.onChange('notify', {
	
});

assembler.import([
	'gsap',
	'foundation',
	'angular'
])

*/

