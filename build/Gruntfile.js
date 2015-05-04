module.exports = function(grunt) {
    grunt.initConfig({
        'download-electron': {
            version: '0.24.0',
            outputDir: 'electron'
        },
        exec: {
            build: {
                command: './electron/Electron.app/Contents/MacOS/Electron .././'
            }
        },
        coffee: {
            glob_to_multiple: {
                expand: true,
                cwd: '../src',
                src: ['**/*.coffee'],
                dest: '../js',
                ext: '.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-download-electron');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('build', ['download-electron', 'coffee', 'exec:build']);
};
