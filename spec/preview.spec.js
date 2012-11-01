var cordova = require('../cordova'),
    shell = require('shelljs'),
    path = require('path'),
    fs = require('fs'),
    config_parser = require('../src/config_parser'),
    android_parser = require('../src/metadata/android_parser'),
    ios_parser = require('../src/metadata/ios_parser'),
    blackberry_parser = require('../src/metadata/blackberry_parser'),
    hooker = require('../src/hooker'),
    fixtures = path.join(__dirname, 'fixtures'),
    hooks = path.join(fixtures, 'hooks'),
    tempDir = path.join(__dirname, '..', 'temp');

var cwd = process.cwd();
shell.rm('-rf', tempDir);

describe('smoke command', function() {
    
    afterEach(function() {
        shell.rm('-rf', tempDir);
    });

    it('should exist', function() {
        this.after(function() {
            process.chdir(cwd);
        });

        cordova.preview()
        /*
        process.chdir(tempDir);
        expect(function() {
            cordova.build();
        }).toThrow();
       */
    });

})
