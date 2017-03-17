module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: './server/server.js'
      }
    },


    shell: {
        multiple: {
            command: [
                'npm install',
                'mongod',
                'npm run seed'
            ].join('&&')
        }
    },
    // shell: {
    //     mongo: {
    //         command: 'mongod'
    //     },
    //     seed: {
    //         command: 'npm run seed'
    //     },
    //     install: {
    //         command: 'npm install'
    //     }
    // },
  });


//npm install, mongod, seed, build watch, server



//   grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('deploy',
      ['shell', 'nodemon']
  );
};