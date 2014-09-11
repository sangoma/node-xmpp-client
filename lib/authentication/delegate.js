'use strict';

var util = require('util')
  , Mechanism = require('./mechanism')
  , querystring = require('querystring')

var Delegate = function() {}

util.inherits(Delegate, Mechanism)

Delegate.prototype.name = 'X-DELEGATE'
Delegate.prototype.id = 'X-DELEGATE'

Delegate.prototype.auth = function() {
    return querystring.stringify({ jid: this.authzid })
}

Delegate.prototype.challenge = function() {
    return ''
}

Delegate.prototype.match = function(options) {
    return options.jid ? true : false
}

module.exports = Delegate
