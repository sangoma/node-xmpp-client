'use strict';

var util = require('util')
  , Mechanism = require('./mechanism')
  , querystring = require('querystring')

/**
 * @see https://developers.facebook.com/docs/chat/#platauth
 */
var Delegate = function() {}

util.inherits(Delegate, Mechanism)

Delegate.prototype.name = 'X-DELEGATE'
Delegate.prototype.id = 'X-DELEGATE'

Delegate.prototype.auth = function() {
    return ''
}

Delegate.prototype.challenge = function() {
    return querystring.stringify({ jid: this.jid })
}

Delegate.prototype.match = function(options) {
    return options.jid ? true : false
}

module.exports = Delegate
