"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Years', () => {

    describe('Calculate difference in years with two dates', () => {
        it('Should return 16 years with dates between 01/01/1970 and 01/01/1986', () => {
            var firstDate = "01/01/1970";
            var secondDate = "01/01/1986";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 23 years with dates between 31-12-1990 and 29-03-2014', () => {
            var firstDate = "31-11-1990";
            var secondDate = "29-03-2014";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(23);
        });

        it('Should return 23 years with dates between 01/01/1991 and 29/03/2014', () => {
            var firstDate = "01/01/1991";
            var secondDate = "29/03/2014";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(23);
        });

        it('Should return 23 years with dates between 30/10/1990 and 29/03/2014', () => {
            var firstDate = "30/10/1990";
            var secondDate = "29/03/2014";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(23);
        });

        it('Should return 16 years with dates between 30-04-1997 and 29/03/2014', () => {
            var firstDate = "30-04-1997";
            var secondDate = "29/03/2014";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 01-01-1986', () => {
            var firstDate = "31/12/1969";
            var secondDate = "01-01-1986";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 30/12/1986', () => {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 50 years with dates between 30/03/1964 and 30/03/2014', () => {
            var firstDate = "30/03/1964";
            var secondDate = "30/03/2014";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(50);
        });

        it('Should return 24 years with dates between 30/11/1989 and 01/04/2014', () => {
            var firstDate = "30/11/1989";
            var secondDate = "01/04/2014";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(24);
        });

        it('Should return 64 years with dates between 31/10/1949 and 01/05/2014', () => {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(64);
        });

        it('Should return 1 year with dates between 01/01/2014 and 01/01/2015', () => {
            var firstDate = "01/01/2014";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(1);
        });

        it('Should return 2 years with dates between 01/01/2013 and 01/01/2015', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(2);
        });

        it('Should return 9 years with dates between 01/01/2010 and 01/01/2019', () => {
            var firstDate = "01/01/2010";
            var secondDate = "01/01/2019";
            var years = shado.date.set(firstDate, secondDate).getYears();

            expect(years).to.equal(9);
        });

        describe('with time segment', () => {
            it('Should return 9 years with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var years = shado.date.set(firstDate, secondDate).getYears();
    
                expect(years).to.equal(9);
            });

            it('Should return 51 years with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var years = shado.date.set(firstDate, secondDate).getYears();
    
                expect(years).to.equal(51);
            });

            describe('ISO 8601 format', () => {
                it('Should return 5 years with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var years = shado.date.set(firstDate, secondDate).getYears();
        
                    expect(years).to.equal(5);
                });
                it('Should return 36 years with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var years = shado.date.set(firstDate, secondDate).getYears();
        
                    expect(years).to.equal(36);
                });
                it('Should return 1 year with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var years = shado.date.set(firstDate, secondDate).getYears();
        
                    expect(years).to.equal(1);
                });
                it('Should return 99 years with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var years = shado.date.set(firstDate, secondDate).getYears();
        
                    expect(years).to.equal(99);
                });
                it('Should return 99 years with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var years = shado.date.set(firstDate, secondDate).getYears();
        
                    expect(years).to.equal(98);
                });
            });
        });

        describe('In US date format', () => {
            it('Should return 23 years with dates between 10/30/1990 and 03/29/2014', () => {
                var firstDate = "10/30/1990";
                var secondDate = "03/29/2014";
                shado.date.set(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(23);
            });

            it('Should return 1 year with dates between 01-01-2014 and 01-01-2015', () => {
                var firstDate = "01-01-2014";
                var secondDate = "01-01-2015";
                shado.date.set(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(1);
            });

            it('Should return 50 years with dates between 03/30/1964 and 03/30/2014', () => {
                var firstDate = "03/30/1964";
                var secondDate = "03/30/2014";
                shado.date.set(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(50);
            });

            it('Should return 16 years with dates between 04/30/1997 and 03/29/2014', () => {
                var firstDate = "04/30/1997";
                var secondDate = "03/29/2014";
                shado.date.set(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(16);
            });

            it('Should return 16 years with dates between 09/21/1989 and 09/21/2014', () => {
                var firstDate = "09/21/1989";
                var secondDate = "09/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(25);
            });

            describe('with time segment', () => {
                it('Should return 11 years with dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var years = shado.date.set(firstDate, secondDate, true).getYears();
        
                    expect(years).to.equal(11);
                });
    
                it('Should return 51 years with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var years = shado.date.set(firstDate, secondDate, true).getYears();
        
                    expect(years).to.equal(51);
                });
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as numbers', () => {
            it('Should return 1 year with dates between 1 1 2016 11:05:10 and 1 1 2017 23:59:59', () => {
                var startDay = 1;
                var startMonth = 1;
                var startYear = 2016;
                var startHour = 11;
                var startMinute = 5;
                var startSeconds = 10;

                var endDay = 1;
                var endMonth = 1;
                var endYear = 2017;
                var endHour = 23;
                var endMinute = 59;
                var endSeconds = 59;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getYears();

                expect(result).to.equal(1);
            });

            it('Should return 101 years with dates between 28 4 2016 11:05:10 and 28 4 2117 23:59:59', () => {
                var startDay = 28;
                var startMonth = 4;
                var startYear = 2016;
                var startHour = 11;
                var startMinute = 5;
                var startSeconds = 10;

                var endDay = 28;
                var endMonth = 4;
                var endYear = 2117;
                var endHour = 23;
                var endMinute = 59;
                var endSeconds = 59;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getYears();

                expect(result).to.equal(101);
            });

            it('Should return 251 years with dates between 31 12 1899 14:05:10 and 31 12 2150 25:59:59', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 14;
                var startMinute = 5;
                var startSeconds = 10;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 23;
                var endMinute = 59;
                var endSeconds = 59;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getYears();

                expect(result).to.equal(251);
            });

            it('Should return 0 year with dates 2 1 1999 14:05:10 and 1 1 2000 25:59:59', () => {
                var startDay = 2;
                var startMonth = 1;
                var startYear = 1999;
                var startHour = 14;
                var startMinute = 5;
                var startSeconds = 10;

                var endDay = 1;
                var endMonth = 1;
                var endYear = 2000;
                var endHour = 23;
                var endMinute = 59;
                var endSeconds = 59;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getYears();

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as strings', () => {
            it('Should return 1 year with dates between "1" "1" "2016" "14" "5" "10" and "1" "1" "2017" "14" "5" "11"', () => {
                var startDay = "1";
                var startMonth = "1";
                var startYear = "2016";
                var startHour = "14";
                var startMinute = "5";
                var startSeconds = "10";

                var endDay = "1";
                var endMonth = "1";
                var endYear = "2017";
                var endHour = "14";
                var endMinute = "5";
                var endSeconds = "11";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getYears();

                expect(result).to.equal(1);
            });

            it('Should return 19 years with dates between "31" "12" "2001" "14" "5" "10" and "31" "12" "2020" "14" "5" "11"', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "2001";
                var startHour = "14";
                var startMinute = "5";
                var startSeconds = "10";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2020";
                var endHour = "14";
                var endMinute = "5";
                var endSeconds = "11";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getYears();

                expect(result).to.equal(19);
            });

            it('Should return 1 year with dates "01" "01" "1999" "0" "0" "0" and "01" "01" "2000" "0" "0" "0"', () => {
                var startDay = "01";
                var startMonth = "01";
                var startYear = "1999";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "01";
                var endMonth = "01";
                var endYear = "2000";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getYears();

                expect(result).to.equal(1);
            });

            it('Should return 0 year with dates "02" "01" "1999" "0" "0" "0" and "01" "01" "2000" "0" "0" "0" ', () => {
                var startDay = "02";
                var startMonth = "01";
                var startYear = "1999";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "01";
                var endMonth = "01";
                var endYear = "2000";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getYears();

                expect(result).to.equal(0);
            });
        });
    });
});