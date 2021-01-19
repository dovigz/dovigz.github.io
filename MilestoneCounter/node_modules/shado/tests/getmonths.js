"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Months', () => {

    describe('Calculation difference in months with two dates', () => {
        it('Should return 12 months between 01/01/2014 and 01/01/2015', () => {
            var firstDate = "01/01/2014";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(12);
        });

        it('Should return 24 months between 01/01/2013 and 01/01/2015', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(24);
        });

        it('Should return 7 months between 01/06/2014 and 01/01/2015', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(7);
        });

        it('Should return 6 months between 01/07/2014 and 01/01/2015', () => {
            var firstDate = "01/07/2014";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(6);
        });

        it('Should return 203 months with dates between 31/12/1969 and 30/12/1986', () => {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(203);
        });

        it('Should return 774 months with dates between 31/10/1949 and 01/05/2014', () => {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(774);
        });

        it('Should return 470 months with dates between 18/02/1975 and 21/04/2014', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(470);
        });

        it('Should return 531 months with dates between 01/01/1970 and 21/04/2014', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(531);
        });

        it('Should return 171 months with dates between 01/01/2000 and 21/04/2014', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(171);
        });

        it('Should return 1371 months with dates between 01/01/1900 and 27/04/2014', () => {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            shado.date.set(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(1371);
        });

        it('Should return 1430 months with dates between 01/01/1900 and 27/04/2014', () => {
            var firstDate = "01/01/1900";
            var secondDate = "05/03/2019";
            var months = shado.date.set(firstDate, secondDate).getMonths();

            expect(months).to.equal(1430);
        });

        describe('with time segment', () => {
            it('Should return 108 months with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var months = shado.date.set(firstDate, secondDate).getMonths();
    
                expect(months).to.equal(108);
            });

            it('Should return 619 months with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var months = shado.date.set(firstDate, secondDate).getMonths();
    
                expect(months).to.equal(619);
            });

            describe('ISO 8601 format', () => {
                it('Should return 60 months with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var months = shado.date.set(firstDate, secondDate).getMonths();
        
                    expect(months).to.equal(60);
                });
                it('Should return 435 months with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var months = shado.date.set(firstDate, secondDate).getMonths();
        
                    expect(months).to.equal(435);
                });
                it('Should return 15 months with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var months = shado.date.set(firstDate, secondDate).getMonths();
        
                    expect(months).to.equal(15);
                });
                it('Should return 1188 months with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var months = shado.date.set(firstDate, secondDate).getMonths()
        
                    expect(months).to.equal(1188);
                });
                it('Should return 1187 months with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var months = shado.date.set(firstDate, secondDate).getMonths();
        
                    expect(months).to.equal(1187);
                });
            });
        });

        describe('In US date format', () => {
            it('Should return 470 months with dates between 02/18/1975 and 04/21/2014', () => {
                var firstDate = "02/18/1975";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(470);
            });

            it('Should return 470 months with date objects between 02/18/1975 and 04/21/2014', () => {
                var firstDate = new Date(1975, 1, 18);
                var secondDate = new Date(2014, 3, 21);
                shado.date.set(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(470);
            });

            it('Should return 1371 months with dates between 01/01/1900 and 04/27/2014', () => {
                var firstDate = "01/01/1900";
                var secondDate = "04/27/2014";
                shado.date.set(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(1371);
            });

            it('Should return 12 months between 01/01/2014 and 01/01/2015', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/01/2015";
                shado.date.set(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(12);
            });

            it('Should return 416 months with dates between 01/01/1980 and 09/21/2014', () => {
                var firstDate = "01/01/1980";
                var secondDate = "09/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(416);
            });

            it('Should return 774 months with dates between 10/31/1949 and 05/01/2014', () => {
                var firstDate = "10/31/1949";
                var secondDate = "05/01/2014";
                shado.date.set(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(774);
            });

            describe('with time segment', () => {
                it('Should return 132 months dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var months = shado.date.set(firstDate, secondDate, true).getMonths();
        
                    expect(months).to.equal(132);
                });
    
                it('Should return 619 months with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var months = shado.date.set(firstDate, secondDate, true).getMonths();
        
                    expect(months).to.equal(619);
                });
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as numbers', () => {
            it('Should return 774 months with dates between 31 10 1949 10:01:34 and 1 5 2014 14:44:50', () => {
                var startDay = 31;
                var startMonth = 10;
                var startYear = 1949;
                var startHour = 10;
                var startMinute = 1;
                var startSeconds = 34;

                var endDay = 1;
                var endMonth = 5;
                var endYear = 2014;
                var endHour = 14;
                var endMinute = 44;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var months = shado.date.getMonths();

                expect(months).to.equal(774);
            });

            it('Should return 3012 months with dates between 31 12 1899 10:02:34 and 31 12 2150 14:44:50', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 10;
                var startMinute = 2;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 14;
                var endMinute = 44;
                var endSeconds = 50;

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getMonths();

                expect(result).to.equal(3012);
            });

            it('Should return 1 month with dates 1 12 1999 12:02:34 and 1 1 2000 14:44:50', () => {
                var startDay = 1;
                var startMonth = 12;
                var startYear = 1999;
                var startHour = 12;
                var startMinute = 2;
                var startSeconds = 34;

                var endDay = 1;
                var endMonth = 1;
                var endYear = 2000;
                var endHour = 14;
                var endMinute = 44;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMonths();

                expect(result).to.equal(1);
            });

            it('Should return 0 month with dates 1 12 1999 12:02:00 and 31 12 1999 15:00:00', () => {
                var startDay = 1;
                var startMonth = 12;
                var startYear = 1999;
                var startHour = 12;
                var startMinute = 2;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 1999;
                var endHour = 15;
                var endMinute = 0;
                var endSeconds = 0;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMonths();

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as strings', () => {
            it('Should return 1200 months with dates between "31" "12" "1920" "12" "02" "34" and "31" "12" "2020" "15" "0" "0"', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1920";
                var startHour = "12";
                var startMinute = "02";
                var startSeconds = "34";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2020";
                var endHour = "15";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var months = shado.date.getMonths();

                expect(months).to.equal(1200);
            });

            it('Should return 774 months with dates between "31" "10" "1949" "12" "02" "34" and "1" "5" "2014" "15" "0" "0"', () => {
                var startDay = "31";
                var startMonth = "10";
                var startYear = "1949";
                var startHour = "12";
                var startMinute = "02";
                var startSeconds = "34";

                var endDay = "1";
                var endMonth = "5";
                var endYear = "2014";
                var endHour = "15";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var months = shado.date.getMonths();

                expect(months).to.equal(774);
            });

            it('Should return 1 month with dates "1" "12" "1999" "12" "02" "34" and "1" "1" "2000" "15" "0" "0"', () => {
                var startDay = "1";
                var startMonth = "12";
                var startYear = "1999";
                var startHour = "12";
                var startMinute = "02";
                var startSeconds = "34";

                var endDay = "1";
                var endMonth = "1";
                var endYear = "2000";
                var endHour = "15";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMonths();

                expect(result).to.equal(1);
            });

            it('Should return 0 month with dates "01" "12" "1999" "12" "02" "34" and "31" "12" "1999" "15" "0" "0"', () => {
                var startDay = "01";
                var startMonth = "12";
                var startYear = "1999";
                var startHour = "12";
                var startMinute = "02";
                var startSeconds = "34";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "1999";
                var endHour = "15";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMonths();

                expect(result).to.equal(0);
            });
        });
    });
});