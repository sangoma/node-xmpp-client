'use strict';

var exec = require('child_process').exec

var startServer = function(done, options) {
    if (!options) options = {}
    
    var pre = []
    pre.push('sudo cp test/resources/' +
        (options.config || 'prosody.cfg.lua') +
        ' /etc/prosody/prosody.cfg.lua')
    pre.push('sudo service prosody start')
    
    exec(pre.join(' && '), function() {
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
