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
        }
    });

    grunt.loadNpmTasks('grunt-download-electron');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('build', ['download-electron', 'exec:build']);
};
