module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    svgmin: {
      options: {
        plugins: [
          { removeDimensions: true }
        ]
      },
      dist: {                     // Target
        files: [{               // Dictionary of files
          expand: true,       // Enable dynamic expansion.
          cwd: 'source/assets/',     // Src matches are relative to this path.
          src: ['**/*.svg'],  // Actual pattern(s) to match.
          dest: 'source/assets/',       // Destination path prefix.
          ext: '.min.svg'     // Dest filepaths will have this extension.
          // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
        }]
      }
    },

    clean: {
      all: ['source/assets/grunticon/*']
    },

    grunticon: {
      icons: {
        files: [
          {
            expand: true,
            cwd: 'source/assets/grunticon/dev',
            src: ['*.svg', '*.png'],
            dest: "source/assets/grunticon/production"
          }
        ],
        options: {
          enhanceSVG: true
        }
      }
    },
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-grunticon');

  /* grunt tasks */
  grunt.registerTask('default', [
    'svgmin',
    'grunticon:icons'
  ]);

};
