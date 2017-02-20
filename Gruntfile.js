module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    csslint: {
      strict: {
        options: {
          important: 2
        },
        src: 'css/styles.css'
      }
    },
    jshint: {
      options: {
        "eqeqeq": true
      },
      all: [
        'Gruntfile.js'
      ]
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 400,
            suffix: '_small',
            quality: 90
          }, {
            width: 600,
            suffix: '_medium',
            quality: 70
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,jpeg,png}'],
          cwd: 'img/',
          dest: 'img/'
        }]
      }
    }
  });

  grunt.registerTask('default', [
    'csslint',
    'jshint',
    'responsive_images'
  ]);
};
