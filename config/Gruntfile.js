module.exports = function(grunt)
{
   grunt.loadNpmTasks('grunt-html2js');
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-connect');


   grunt.registerTask('default', ['jshint', 'copy', 'html2js', 'concat', 'less', 'cssmin', 'connect', 'watch']);


   grunt.initConfig(
   {
      pkg: grunt.file.readJSON('package.json'),





      // grunt-contrib-watch
      // https://github.com/gruntjs/grunt-contrib-watch
      // Autocompiles the application when a file is saved
      watch:
      {
         html:
         {
            files: 
            [
               'dev/**/*.html'
            ],
            tasks: ['html2js', 'concat', 'copy']
         },
         styles: 
         {
            files: ['dev/**/*.less'],
            tasks: ['less', 'cssmin'],
            options: 
            {
               nospawn: true
            }
         },
         scripts:
         {
            files: ['dev/**/*.js'],
            tasks: ['jshint', 'concat']
         }
      },





      // grunt-contrib-jshint
      // https://github.com/gruntjs/grunt-contrib-jshint
      // Validate files with JSHint.
      jshint: 
      {
         files: ['dev/**/*.js']
      },





      // grunt-html2js
      // https://github.com/karlgoldstein/grunt-html2js
      // Grunt plugin for converting AngularJS templates to JavaScript
      html2js: 
      {
         main: 
         {
            src: ['dev/**/*.html'],
            dest: 'www/js/templates.js'
         },
      },





      // grunt-contrib-concat
      // https://github.com/gruntjs/grunt-contrib-concat
      // Concatenate files.
      concat:
      {
         dist:
         {
            nonull: true,
            dest: 'www/js/ep3.js',
            src: 
            [
              'vendor/angular/angular.js',
              'vendor/angular-ui-router/release/angular-ui-router.js',
              'vendor/angular-fontawesome/dist/angular-fontawesome.js',
              'vendor/angular-bootstrap/ui-bootstrap.js',
              'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
              'vendor/jquery/dist/jquery.js',
              'www/js/templates.js',
              'dev/**/*.js'
            ]
         }
      },





      // grunt-contrib-less
      // https://github.com/gruntjs/grunt-contrib-less
      // Compile LESS files to CSS.
      less: 
      {
         development: 
         {
            options: 
            {
               compress: true,
               yuicompress: true,
               optimization: 2
            },
            files: 
            {
               "www/css/ep3.css": "dev/**/*.less"
            }
         }
      },





      // grunt-contrib-cssmin
      // https://github.com/gruntjs/grunt-contrib-cssmin
      // Compress CSS files.
      cssmin: 
      {
         add_banner: 
         {
            files: 
            {
               'www/css/ep3.css': 
               [
                  'www/css/ep3.css',
                  'vendor/bootstrap/dist/css/bootstrap.min.css',
                  'vendor/fontawesome/css/font-awesome.css'
               ]
            }
         }
      },





      // grunt-contrib-connect
      // https://github.com/gruntjs/grunt-contrib-connect
      // Starts a static web server.
      connect:
      {
         server:
         {
            options:
            {
               base:'www',
               port: 3333
            }
         }
      },





      // grunt-contrib-copy
      // https://github.com/gruntjs/grunt-contrib-copy
      // Copy fonts and images into proper directories
      copy:
      {
         
         main: 
         {
            files:
            [
               {
                  nonull: true, expand:true, cwd: 'vendor/bootstrap/fonts/', src: ['**'], dest: 'www/fonts/'
               },
               {
                  nonull: true, expand:true, cwd: 'vendor/fontawesome/fonts/', src: ['**'], dest: 'www/fonts/'
               },
               {
                  nonull: true, expand:true, cwd: 'dev/common/images/', src: ['**'], dest: 'www/images/'
               },
               {
                  nonull: true, expand:true, cwd: 'dev/app/_root/', src: ['index.html'], dest: 'www/'
               }
            ]
         }
      }
   });
};