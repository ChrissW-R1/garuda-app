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
                        cwd: 'src/main',
                        src: 'js/**',
                        dest: 'www/'
                    }
                ],
            },
        },
        less: {
            production: {
                options: {
                    paths: ['src/main/less'],
                    compress: true
                },
                files: {
                    'www/css/garuda.css': 'src/main/less/garuda.less'
                }
            }
        },
        'curl-dir': {
            'www/js': [
                'https://vuejs.org/js/vue.min.js',
                'https://code.jquery.com/jquery-3.2.1.min.js'
            ]
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-curl');

    // Default task(s).
    grunt.registerTask('offline', [
        'clean',
        'copy',
        'less'
    ])
    grunt.registerTask('default', [
        'offline',
        'curl-dir'
    ]);
};
