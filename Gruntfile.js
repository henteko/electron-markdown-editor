module.exports = function(grunt) {
    grunt.initConfig({
        'download-electron': {
            version: '0.25.2',
            outputDir: './build/electron'
        },
        exec: {
            build: {
                command: './build/electron/Electron.app/Contents/MacOS/Electron ./'
            }
        },
        cjsx: {
            glob_to_multiple: {
                expand: true,
                cwd: 'src',
                src: ['*.coffee'],
                dest: 'js/',
                ext: '.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-download-electron');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-coffee-react');

    grunt.registerTask('setup', ['download-electron'])
    grunt.registerTask('run', ['cjsx','exec:build']);
};
