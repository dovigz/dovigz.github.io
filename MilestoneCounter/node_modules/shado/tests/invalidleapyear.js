"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Invalid Leap Year', () => {
    
    it('Should increment end date to 01/03/2015 if end date is 29/02/2015 - invalid leap year', () => {
        var firstDate = "27/06/2014";
        var secondDate = "29/02/2015";
        var days = shado.date.set(firstDate, secondDate).getDays(false);

        expect(days).to.equal(247);
    });

    it('Should increment start date to 01/03/2014 if start date is 29/02/2014 - invalid leap year', () => {
        var firstDate = "29/02/2014";
        var secondDate = "01/03/2014";
        shado.date.set(firstDate, secondDate);
        var days = shado.date.getDays(false);

        expect(days).to.equal(0);
    });

    describe('In US date format', () => {
        it('Should increment end date to 03/01/2015 if end date is 02/29/2015 - invalid leap year', () => {
            var firstDate = "06/27/2014";
            var secondDate = "02/29/2015";
            var days = shado.date.set(firstDate, secondDate, true).getDays(false);

            expect(days).to.equal(247);
        });

        it('Should increment start date to 01/03/2014 if start date is 29/02/2014 - invalid leap year', () => {
            var firstDate = "02/29/2014";
            var secondDate = "03/01/2014";
            shado.date.set(firstDate, secondDate, true);
            var days = shado.date.getDays(false);

            expect(days).to.equal(0);
        });
    });
});