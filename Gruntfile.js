module.exports = function(grunt) {

  // Project configuration.
  // this will hold the location of my package.json
  // will also hold the configuration settings for all of my dependencies
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
	  // grunt-contrib-connect
      // https://github.com/gruntjs/grunt-contrib-connect
      // Starts a static web server.
      connect:
      {
         server:
         {
            options:
            {
               // protocol: 'https',
               // base:'',
               port: 3333
            }
         }
      },
	  
	  
      // grunt-contrib-watch
      // https://github.com/gruntjs/grunt-contrib-watch
      // Autocompiles the application when a file is saved
      watch:
      {}
  });
  
  // load grunt plugins and tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect','watch']);

}