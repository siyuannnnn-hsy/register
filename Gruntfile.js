module.exports = function(grunt){
    grunt.initConfig({
        htmlmin:{
            options:{
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files:{
                src:'./index.html',
                dest:'dist/index.html'
            }
        },
        cssmin: {  
            files:{
                src:'./index.css',
                dest:'dist/index.css'
            }
          },
        uglify: {
            // my_target:{
              files: {
                src:'./index.js',
                dest:'dist/index.js'
              } 
            // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['htmlmin','cssmin','uglify']);
};