

/* Pulling in required packages
******************************/
var gulp = require("gulp"),
	watch = require("gulp-watch"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssvars = require("postcss-simple-vars"),
	nested = require("postcss-nested"),
	cssImport = require("postcss-import");

/* Defining a task to run
************************/

	/* Basic Tasks
	*************/
		gulp.task("default", function() {
			console.log("Gulp task created.");
		});

		gulp.task("html", function() {
			console.log("Imagine HTML filed is modified.");
		});

		gulp.task("styles", function() {
			
			// Designate original CSS file
			return gulp.src("./app/assets/styles/styles.css")
				
				// Process through designated filters
				.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
				
				// Output to another folder
				.pipe(gulp.dest("./app/temp/styles"));
		});

	/* gulp-watch Tasks
	******************/
	gulp.task("watch", function() {
		
		// Monitor index.html for changes
		watch("./app/index.html", function() {

			// If changes, automatically start html task
			gulp.start("html");
		});

		// Monitor styles folder, and any future subfolders, for any .css files
		watch("./app/assets/styles/**/*.css", function() {
			gulp.start("styles");
		})
	});