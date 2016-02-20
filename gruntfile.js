module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      tsc: {
        command: 'tsc'
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['angular-no-track-social.js'] 
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'ngular-no-track-social.min.js': ['angular-no-track-social.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['shell:tsc', 'jshint', 'uglify']);
  grunt.registerTask('ts', ['ts']);
};