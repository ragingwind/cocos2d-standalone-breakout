/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*\n' +
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        ' * <%= pkg.homepage ? "homepage: " + pkg.homepage + "\n" : "\n" %>' +
        ' * <%= pkg.reference ? "reference: " + pkg.reference + "\n" : "\n" %>' +
        ' * <%= pkg.author ? "author: " + pkg.author + "\n" : "\n" %>' +
        ' */'
    },
    lint: {
      files: ['grunt.js', 'src/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'src/*.js'],
        dest: 'dist/breakout.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/breakout.min.js'
      }
    },
    copy: {
      dist: {
        files: {
          'dist/assets/':'src/assets/**',
          'dist/libs/':'src/libs/**',
          'dist/breakout.css':'src/breakout.css',
          'dist/index.html':'src/index.min.html'
        }
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint run'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    server: {
      port: 8080,
      base: './src'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', 'lint concat min copy');

  // Running Application.
  grunt.registerTask("run", "server watch");
};
