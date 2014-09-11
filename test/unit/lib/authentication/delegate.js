'use strict';

var Delegate = require('../../../../lib/authentication/delegate')

var mech = new Delegate()

require('should')

/* jshint -W030 */
describe('Delegated authentication', function() {

    describe('Detect SASL mechanisms', function() {

        it('Should return true always', function() {
            var options = {}
            mech.match(options).should.equal(true)
        })

        it('Should return an empty challenge', function() {
            mech.challenge().should.equal('')
        })

    })

})
