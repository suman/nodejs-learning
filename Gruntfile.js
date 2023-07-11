module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
          options: {
            mangle: false
          },
          my_target: {
            files: {
              'output.min.js': ['*.js']
            }
          }
        }
      });
    grunt.loadNpmTasks('grunt-contrib-uglify');
  };