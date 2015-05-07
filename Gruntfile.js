const ELECTRON_PATH = 'build/electron'
const APP_PATH = ELECTRON_PATH + '/Electron.app';
const BUILD_PATH = APP_PATH + '/Contents/Resources/app';

module.exports = function(grunt) {
    grunt.initConfig({
        'download-electron': {
            version: '0.25.2',
            outputDir: ELECTRON_PATH
        },
        exec: {
            run: {
                command: 'open ' + APP_PATH
            },
            clean: {
                command: 'rm -rf ' + BUILD_PATH
            }
        },
        cjsx: {
            glob_to_multiple: {
                expand: true,
                cwd: 'src',
                src: ['**/*.coffee'],
                dest: BUILD_PATH + '/src',
                ext: '.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.scss'],
                    dest: BUILD_PATH + '/styles',
                    ext: '.css'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'static/', src: ['**'], dest: BUILD_PATH + '/static'}
                ]
            },
            config: {
                files: [
                    {expand: true, src: ['package.json'], dest: BUILD_PATH, filter: 'isFile'}
                ]
            },
            system: {
                files: [
                    {expand: true, cwd: 'node_modules/', src: ['**'], dest: BUILD_PATH + '/node_modules'}
                ]
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.coffee'],
                tasks: ['cjsx'],
                options: {
                    spawn: false
                }
            },
            staticFiles: {
                files: ['static/*.html', 'styles/*.scss'],
                tasks: ['sass', 'copy:main'],
                options: {
                    spawn: false
                }
            },
            configFiles: {
                files: ['package.json'],
                tasks: ['copy:config'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-download-electron');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-coffee-react');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('setup', ['download-electron']);
    grunt.registerTask('build', ['exec:clean', 'cjsx', 'sass', 'copy:main', 'copy:config', 'copy:system']);
    grunt.registerTask('sync', ['cjsx', 'sass', 'copy:main']);
    grunt.registerTask('run',   ['exec:run']);
    grunt.registerTask('start',   ['build', 'run', 'watch']);
};
