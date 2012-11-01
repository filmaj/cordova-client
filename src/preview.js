var create  = require('./create')
,   path    = require('path')
,   fs      = require('fs')
,   dir     = path.join(process.cwd(), 'SmokeTest')
,   package = 'org.apache.cordova.smoke'
,   name    = 'AAA'
,   shell   = require('shelljs')
,   www     = path.join(dir, 'www')
,   index   = path.join(www, 'index.html')

module.exports = function smoke (path_to_www_or_index) {
    // create a project w/ vanilla defaults
    create(dir, package, name)
    // kill the generated www
    shell.rm('-rf', www)
    // copy www dir or just index
    fs.stat(path_to_www_or_index, function(err, data) {
        if (data.isDirectory()) {
            var src = path.join(process.cwd, path_to_www_or_index)
            ,   dest = www
            // FIXME this is a bug w/ shelljs 
            // shell.cp('-r', src, dest)
            require('child_process').exec('cp -r ' + src + ' ' + dest, function(err, stdout, stderr) {
                if (err !== null) console.log('exec error: ' + err)
            })
        }
        else {
            shell.mkdir('-p', www)
            shell.cp(path_to_www_or_index, index)
        }
    })
}
