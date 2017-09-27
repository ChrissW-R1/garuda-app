module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            paltforms: ['platforms/*/']
        },
        'curl-dir': {
            'www/js/external': [
                'https://vuejs.org/js/vue.min.js'
            ]
        }
    });

    // Load the plugin that provides the "clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Load in `grunt-curl`
    grunt.loadNpmTasks('grunt-curl');

    // Default task(s).
    grunt.registerTask('offline', ['clean'])
    grunt.registerTask('default', ['offline', 'curl-dir']);
};
