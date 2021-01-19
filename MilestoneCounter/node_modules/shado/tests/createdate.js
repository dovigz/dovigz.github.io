"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Create new date object', () => {
    
    it('Should return new date object for given date of "01/01/1970"', () => {
        var date = "01/01/1970";
        var expectedDate = new Date(Date.UTC(1970, 0, 1));

        var result = shado.date.createDate(date);
        expect(result).to.deep.equal(expectedDate);
    });

    it('Should return new date object for given date of "19/07/2014"', () => {
        var date = "19/07/2014";
        var expectedDate = new Date(Date.UTC(2014, 6, 19));

        var result = shado.date.createDate(date);
        expect(result).to.deep.equal(expectedDate);
    });

    it('Should return new date object for given US date format of "07/19/2014"', () => {
        var date = "07/19/2014";
        var expectedDate = new Date(Date.UTC(2014, 6, 19));

        var result = shado.date.createDate(date, true);
        expect(result).to.deep.equal(expectedDate);
    });

    it('Should return new date object for given US date format of "07-19-2014"', () => {
        var date = "07-19-2014";
        var expectedDate = new Date(Date.UTC(2014, 6, 19));

        var result = shado.date.createDate(date, true);
        expect(result).to.deep.equal(expectedDate);
    });

    it('Should return new date object for current date', () => {
        var today = new Date();
        var date = "".concat(("0" + today.getDate()).slice(-2), '/', ("0" + (today.getMonth() + 1)).slice(-2), '/', today.getFullYear());
        var expectedDate = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

        var result = shado.date.createDate(date);
        expect(result).to.deep.equal(expectedDate);
    });

    it('Should return new date object for current date in US date format', () => {
        var today = new Date();
        var date = "".concat(("0" + (today.getMonth() + 1)).slice(-2), '/', ("0" + today.getDate()).slice(-2), '/', today.getFullYear());
        var expectedDate = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

        var result = shado.date.createDate(date, true);
        expect(result).to.deep.equal(expectedDate);
    });

    describe('with time segment', () => {

        it('Should return new date object for given date and time of "07/06/2019 14:34:45:010"', () => {
            var date = "07/06/2019 14:34:45:10";
            var expectedDate = new Date(Date.UTC(2019, 5, 7, 14, 34, 45, 10));

            var result = shado.date.createDate(date);
            expect(result).to.deep.equal(expectedDate);
        });
        
        it('Should return new date object for current date and time in US date format', () => {
            var today = new Date();
            var date = "".concat(("0" + (today.getMonth() + 1)).slice(-2), '/', ("0" + today.getDate()).slice(-2), '/', today.getFullYear(), ' ', ("0" + today.getHours()).slice(-2), ':', ("0" + today.getMinutes()).slice(-2), ':', ("0" + today.getSeconds()).slice(-2), ':', ("0" + today.getMilliseconds()).slice(-3));
            var expectedDate = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds()));

            var result = shado.date.createDate(date, true);
            expect(result).to.deep.equal(expectedDate);
        });
    });
});