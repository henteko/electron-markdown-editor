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
        cjsx: {
            glob_to_multiple: {
                expand: true,
                cwd: '../src',
                src: ['*.coffee'],
                dest: '../js/',
                ext: '.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-download-electron');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-coffee-react');

    grunt.registerTask('build', ['download-electron', 'cjsx','exec:build']);
};
