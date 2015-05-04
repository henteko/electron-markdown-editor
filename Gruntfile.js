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
                dest: 'public/js/',
                ext: '.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-download-electron');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-coffee-react');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('setup', ['download-electron'])
    grunt.registerTask('run', ['cjsx', 'sass', 'exec:build']);
};
