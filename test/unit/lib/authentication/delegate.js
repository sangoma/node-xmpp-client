'use strict';

var Delegate = require('../../../../lib/authentication/delegate')

var mech = new Delegate()

require('should')

/* jshint -W030 */
describe('Delegated authentication', function() {

    describe('Detect SASL mechanisms', function() {

        it('Should return true if there is a JID', function() {
            var options = { jid: 'user@example.com' }
            mech.match(options).should.equal(true)
        })
        
        it('Should return false if there\'s no JID', function() {
            var options = {}
            mech.match(options).should.equal(false)
        })

        it('Should return an an auth response', function() {
            mech.jid = 'user@example.com'
            mech.auth().should.equal('jid=user%40example.com')
        })
        
        it('Should return an empty challenge', function() {
            mech.challenge().should.equal('')
        })

    })

})
