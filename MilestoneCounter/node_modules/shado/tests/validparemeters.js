"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Valid Parameters', () => {

    describe('for the method set', () => {
        it('Should not raise exception if first parameter is date object', () => {
            var firstDate = new Date(2014, 3, 27);
            var secondDate = "27/04/2014";

            expect(() => {
                shado.date.set(firstDate, secondDate);
            }).not.to.throw('Parameters are not of expected type string or date');
        });

        it('Should not raise exception if second parameter is date valid date object', () => {
            var firstDate = "01/01/1970";
            var secondDate = new Date(2014, 3, 27);

            expect(() => {
                shado.date.set(firstDate, secondDate);
            }).not.to.throw('Parameters are not of expected type string or date');
        });

        it('Should return 451436400 seconds with dates object parameters between 01/01/2000 and 22/04/2014 excluding last day', () => {
            var firstDate = new Date(2000, 0, 1);
            var secondDate = new Date(2014, 3, 22);
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(451436400);
        });
    });

    describe('for the method setParams', () => {
        it('Should not raise exception if day parameter is a number or string', () => {
            var startDay = 1;
            var startMonth = 1;
            var startYear = 2015;
            var startHour = 7;
            var startMinute = 23;
            var startSeconds = 34;
            var endDay = 1;
            var endMonth = 1;
            var endYear = 2016;
            var endHour = 14;
            var endMinute = 5;
            var endSeconds = 50;

            expect(() => {
                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            }).not.to.throw('Parameters are expecting type number or string');
        });

        it('Should not raise exception if parameter are a mixture of strings or numbers', () => {
            var startDay = '1';
            var startMonth = 1;
            var startYear = 2016;
            var startHour = 0;
            var startMinute = 0;
            var startSeconds = 0;

            var endDay = 1;
            var endMonth = '1';
            var endYear = 2018;
            var endHour = 0;
            var endMinute = 0;
            var endSeconds = 0;

            expect(() => {
                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            }).not.to.throw('Parameters are expecting type number or string');
        });

        it('Should not raise exception if all parameters are valid', () => {
            var startDay = 1;
            var startMonth = 5;
            var startYear = 2016;
            var startHour = 0;
            var startMinute = 0;
            var startSeconds = 0;

            var endDay = 1;
            var endMonth = 1;
            var endYear = 2017;
            var endHour = 0;
            var endMinute = 0;
            var endSeconds = 0;

            expect(() => {
                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            }).not.to.throw('Parameters are expecting type number or string');
        });

        it('Should return 451436400 seconds with dates object parameters between 01/01/2000 and 22/04/2014 excluding last day', () => {
            var startDay = 1;
            var startMonth = 1;
            var startYear = 2000;
            var startHour = 0;
            var startMinute = 0;
            var startSeconds = 0;

            var endDay = 22;
            var endMonth = 4;
            var endYear = 2014;
            var endHour = 0;
            var endMinute = 0;
            var endSeconds = 0;

            shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(451436400);
        });
    });
});