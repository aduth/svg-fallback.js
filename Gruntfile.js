module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> <%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.license %> License */\n',

        concat: {
            options: {
                stripBanners: { block: true },
                banner: '<%= banner %>'
            },
            dist: {
                src: [ 'svg-fallback.js' ],
                dest: 'svg-fallback.js'
            }
        },

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
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('compile', [ 'concat', 'uglify' ]);
};
