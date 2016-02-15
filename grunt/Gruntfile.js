// jscs:disable

module.exports = function(grunt) {

	'use strict';

	// Load all NPM installed grunt tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		paths: {
			frontend: '../frontend'
		},
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			src: '<%= paths.frontend %>/js/source/**/*.js',
			options: {
				jshintrc: '<%= paths.frontend %>/js/.jshintrc'
			}
		},
		jscs: {
			src: '<%= jshint.src %>',
			options: {
				config: '<%= paths.frontend %>/js/.jscsrc'
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: '<%= paths.frontend %>/js/source',
					mainConfigFile: '<%= paths.frontend %>/js/source/requireConfig.js',
					name: 'main',
					out: '<%= paths.frontend %>/js/build/main.js',
					findNestedDependencies: true,	// include all required files into the build
					optimize: 'none',				// Use seperate uglify task
					logLevel: 3,					// Errors only
					paths: {
						'jquery': 'empty:'
					}
				}
			}
		},
		uglify: {
			options: {
				// banner: '<%= banner %>',
				preserveComments: false,
				report: 'min',
				compress: {
					global_defs: {
						'debug': false
					},
					dead_code: true,
					drop_console: true
				}
			},
			compile: {
				files: [{
					expand: true,
					cwd: '<%= paths.frontend %>/js/build',
					src: ['*.js', '!*.min.js'],				// Top level only
					dest: '<%= paths.frontend %>/js/build'	// overwrite files
				}]
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			compile: {
				files: [{
					expand: true,
					cwd: '<%= paths.frontend %>/css/scss',
					src: ['**/*.scss'],
					dest: '<%= paths.frontend %>/css',
					ext: '.css'
				}]
			}
		},
		postcss: {
			options: {
				map: true,
				processors: [
					// add vendor prefixes
					require('autoprefixer')({
						browsers: ['last 2 versions']
					})
				]
			},
			compile: {
				files: [{
					expand: true,
					cwd: '<%= paths.frontend %>/css',
					src: ['**/*.css'],
					dest: '<%= paths.frontend %>/css',
					ext: '.css'
				}]
			}
		},
		notify: {
			css: {
				options: {
					message: 'SCSS Compiled & CSS prefixed'
				}
			},
			js: {
				options: {
					message: 'JS compiled'
				}
			}
		},
		watch: {
			grunt: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			},
			'css': {
				files: ['<%= paths.frontend %>/css/scss/**/*.scss'],
				tasks: ['sass', 'postcss', 'notify:css'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			'js': {
				files: ['<%= jshint.src %>'],
				tasks: ['scripts', 'notify:js'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}
	});

	// Default task.
	grunt.registerTask('default', ['scripts', 'sass', 'postcss']);

	// Scripts task
	grunt.registerTask('scripts', ['jshint', 'jscs', 'requirejs']);

	// Build for production
	grunt.registerTask('build', ['scripts', 'uglify', 'sass', 'postcss']);
};