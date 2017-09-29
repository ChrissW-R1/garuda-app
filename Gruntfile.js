module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            paltforms: ['platforms/*/'],
            target: ['www/**']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/main/resources',
                        src: '**',
                        dest: 'www/'
                    },
                    {
                        expand: true,
                        cwd: 'src/main/html',
                        src: '**',
                        dest: 'www/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/jquery/dist/',
                        src: 'jquery.min.js',
                        dest: 'www/js/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/vue/dist/',
                        src: 'vue.min.js',
                        dest: 'www/js/'
                    }
                ],
            },
        },
        less: {
            main: {
                options: {
                    paths: ['src/main/less'],
                    compress: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/main/less',
                    src: ['*.less'],
                    dest: 'www/css/',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            main: {
                src: 'src/main/js/**/*',
                dest:
                    'www/js/garuda.js'
            }
        },
        htmlmin: {
            main: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/main/html',
                    src: [
                        '*.html',
                        '*.htm'
                    ],
                    dest: 'www/'
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'copy',
        'less',
        'uglify',
        'htmlmin'
    ]);
};
