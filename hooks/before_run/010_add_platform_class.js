#!/usr/bin/env node
'use strict';
var exec = require('child_process').exec;
exec('gulp config-prod scripts',
  function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('gulp build failed:\n' + error);
      process.exit(1);
    }
  });
