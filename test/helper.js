'use strict';

var exec = require('child_process').exec

var startServer = function(done, options) {
    if (!options) options = {}
    var pre = ''
    pre += 'sudo cp test/resources/' +
        (options.config || 'prosody.cfg.lua') +
        ' /etc/prosody/prosody.cfg.lua &&'
    exec(pre + ' sudo service prosody start', function() {
        setTimeout(function() {
            done()
        }, 1000)
    })
}

var stopServer = function(done) {
    exec('sudo service prosody stop', function() {
        done()
    })
}

module.exports = {
    startServer: startServer,
    stopServer: stopServer
}
