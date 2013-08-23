module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> <%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.license %> License */\n',

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                files: {
                    'svg-fallback.min.js': [ 'svg-fallback.js' ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('compile', [ 'uglify' ]);
};
