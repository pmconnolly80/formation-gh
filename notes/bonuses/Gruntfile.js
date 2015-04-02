module.exports = function(grunt) {

  // Configure les tâches.
  grunt.initConfig({
    jshint: {
      all: ['app.js']
    },
    concat: {
      dist: {
        src: ['scripts.js', 'scripts1.js'],
        dest: 'merged.js'
      }
    },
    uglify: {
      dist: {
        src: 'merged.js',
        dest: 'build/merged.min.js'
      }
    },
    shell: {
      multiple: {
        command: [
          'rm -rf merged.js',
          'mkdir -p deploy',
          'mv build/merged.min.js deploy/merged.min.js'
        ].join('&&')
      }
    }
  });

  // Charge les packages nécessaires à l'exécution des tâches.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  // Expose les tâches.
  grunt.registerTask('default', ['jshint']);  // tâche par défaut
};
