'use strict';

var util = require('util')
  , Mechanism = require('./mechanism')

function Delegate() {}

util.inherits(Delegate, Mechanism)

Delegate.prototype.name = 'X-DELEGATE'

Delegate.prototype.auth = function() {
    return this.passphrase
}

Delegate.prototype.match = function(options) {
    if (options.passphrase) return true
    return false
}

module.exports = Delegate
