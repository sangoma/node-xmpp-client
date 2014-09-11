'use strict';

var Delegate = require('../../../../lib/authentication/delegate')

var mech = new Delegate()

require('should')

/* jshint -W030 */
describe('Delegation authentication', function() {

    describe('Detect SASL mechanisms', function() {

        it('Should return true if \'passphrase\' property exists', function() {
            var options = { passphrase: 'abracadabra' }
            mech.match(options).should.equal(true)
        })

        it('Should return false if \'passphrase\' property doesn\'t exist', function() {
            var options = {}
            mech.match(options).should.equal(false)
        })

    })

})
