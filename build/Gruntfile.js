module.exports = function(grunt) {
    grunt.initConfig({
        'download-electron': {
            version: '0.24.0',
            outputDir: 'electron'
        }
    });

    grunt.loadNpmTasks('grunt-download-electron');
};
