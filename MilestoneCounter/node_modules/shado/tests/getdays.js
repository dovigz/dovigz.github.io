"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Days', () => {
    
    describe('Calculation difference in days with two dates', () => {
        it('Should return 1 day with dates between 01/01/2014 and 02/01/2014 excluding last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(1);
        });

        it('Should return 2 days with dates between 01/01/2014 and 02/01/2014 including last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(2);
        });

        it('Should return 100 days with dates between 01/01/2014 and 10/04/2014 including last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(100);
        });

        it('Should return 99 days with dates between 01/01/2014 and 10/04/2014 excluding last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(99);
        });

        it('Should return 23473 days with dates between 31/12/1949 and 07/04/2014 excluding last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "07/04/2014";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(23473);
        });

        it('Should return 23474 days with dates between 31/12/1949 and 07/04/2014 including last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "07/04/2014";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(23474);
        });

        it('Should return 78 days with dates between 25/09/1988 and 12/12/1988 excluding last day', () => {
            var firstDate = "25/09/1988";
            var secondDate = "12/12/1988";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(78);
        });

        it('Should return 79 days with dates between 25/09/1988 and 12/12/1988 including last day', () => {
            var firstDate = "25/09/1988";
            var secondDate = "12/12/1988";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(79);
        });

        it('Should return 33 days with dates between 29/02/2012 and 01/04/2012 including last day', () => {
            var firstDate = "29/02/2012";
            var secondDate = "01/04/2012";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(33);
        });

        it('Should return 32 days with dates between 29/02/2012 and 01/04/2012 excluding last day', () => {
            var firstDate = "29/02/2012";
            var secondDate = "01/04/2012";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(32);
        });

        it('Should return 1037 days with dates between 20/01/1961 and 22/11/1963 including last day', () => {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(1037);
        });

        it('Should return 1036 days with dates between 20/01/1961 and 22/11/1963 excluding last day', () => {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.set(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(1036);
        });

        it('Should return 43527 days with dates between 01/01/1900 and 05/03/2019 excluding last day', () => {
            var firstDate = "01/01/1900";
            var secondDate = "05/03/2019";
            var days = shado.date.set(firstDate, secondDate).getDays(false);

            expect(days).to.equal(43527);
        });

        describe('with time segment', () => {
            it('Should return 3287 days with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var days = shado.date.set(firstDate, secondDate).getDays(false);
    
                expect(days).to.equal(3287);
            });

            it('Should return 18842 days with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var days = shado.date.set(firstDate, secondDate).getDays(false);
    
                expect(days).to.equal(18842);
            });

            describe('ISO 8601 format', () => {
                it('Should return 1827 days with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var days = shado.date.set(firstDate, secondDate).getDays(false);
        
                    expect(days).to.equal(1827);
                });
                it('Should return 13242 days with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var days = shado.date.set(firstDate, secondDate).getDays(false);
        
                    expect(days).to.equal(13242);
                });

                it('Should return 458 days with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var days = shado.date.set(firstDate, secondDate).getDays(false);
        
                    expect(days).to.equal(458);
                });

                it('Should return 36159 days with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var days = shado.date.set(firstDate, secondDate).getDays(false);
        
                    expect(days).to.equal(36159);
                });

                it('Should return 36158 days with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var days = shado.date.set(firstDate, secondDate).getDays(false);
        
                    expect(days).to.equal(36158);
                });

                it('Should return 18842 days with dates between 1967-06-01T03:34:25:233Z and 2019-01-01T19:32:44:12Z', () => {
                    var firstDate = "1967-06-01T03:34:25:233Z";
                    var secondDate = "2019-01-01T19:32:44:12Z";
                    var days = shado.date.set(firstDate, secondDate).getDays(false);
        
                    expect(days).to.equal(18842);
                });
            });
        });

        describe('In US date format', () => {
            it('Should return 1036 days with dates between 01/20/1961 and 11/22/1963 excluding last day', () => {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.set(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(1036);
            });

            it('Should return 1037 days with dates between 01/20/1961 and 11/22/1963 including last day', () => {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.set(firstDate, secondDate, true);
                var days = shado.date.getDays(true);

                expect(days).to.equal(1037);
            });

            it('Should return 1 day with dates between 01/01/2014 and 01/02/2014 excluding last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.set(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(1);
            });

            it('Should return 2 days with dates between 01/01/2014 and 01/02/2014 including last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.set(firstDate, secondDate, true);
                var days = shado.date.getDays(true);

                expect(days).to.equal(2);
            });

            it('Should return 99 days with dates between 01/01/2014 and 04/10/2014 excluding last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "04/10/2014";
                shado.date.set(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(99);
            });

            it('Should return 100 days with dates between 01/01/2014 and 04/10/2014 including last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "04/10/2014";
                shado.date.set(firstDate, secondDate, true);
                var days = shado.date.getDays(true);

                expect(days).to.equal(100);
            });

            it('Should return 43528 days with dates between 01/01/1900 and 03/05/2019 including last day', () => {
                var firstDate = "01/01/1900";
                var secondDate = "03/05/2019";
                var days = shado.date.set(firstDate, secondDate, true).getDays(true);
    
                expect(days).to.equal(43528);
            });

            describe('with time segment', () => {
                it('Should return 4018 days dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var days = shado.date.set(firstDate, secondDate, true).getDays(false);
        
                    expect(days).to.equal(4018);
                });
    
                it('Should return 18842 days with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var days = shado.date.set(firstDate, secondDate, true).getDays(false);
        
                    expect(days).to.equal(18842);
                });
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as numbers', () => {
            it('Should return 91676 days with dates between 31 12 1899 10:45:34 and 31 12 2150 14:07:50, excluding last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 10;
                var startMinute = 45;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 14;
                var endMinute = 7;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays();

                expect(result).to.equal(91676);
            });

            it('Should return 91677 days with dates between 31 12 1899 10:45:34 and 31 12 2150 14:07:50, including last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 10;
                var startMinute = 45;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 14;
                var endMinute = 7;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(true);

                expect(result).to.equal(91677);
            });

            it('Should return 23474 days with dates between 31 12 1949 18:53:32 and 07 04 2014 22:07:49, including last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1949;
                var startHour = 18;
                var startMinute = 53;
                var startSeconds = 32;

                var endDay = 7;
                var endMonth = 4;
                var endYear = 2014;
                var endHour = 22;
                var endMinute = 7;
                var endSeconds = 49;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(true);

                expect(result).to.equal(23474);
            });

            it('Should return 23473 days with dates between 31 12 1949 18:53:32 and 07 04 2014 22:07:49, excluding last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1949;
                var startHour = 18;
                var startMinute = 53;
                var startSeconds = 32;

                var endDay = 7;
                var endMonth = 4;
                var endYear = 2014;
                var endHour = 22;
                var endMinute = 7;
                var endSeconds = 49;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(false);

                expect(result).to.equal(23473);
            });

            it('Should return 18287 days with dates between 31 12 1969 07:23:34 and 25 01 2020 14:05:50, excluding last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1969;
                var startHour = 7;
                var startMinute = 23;
                var startSeconds = 34;

                var endDay = 25;
                var endMonth = 1;
                var endYear = 2020;
                var endHour = 14;
                var endMinute = 5;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(false);

                expect(result).to.equal(18287);
            });

            it('Should return 0 day with dates between 10 10 2016 07:23:34 and 10 10 2016 14:05:50, excluding last day', () => {
                var startDay = 10;
                var startMonth = 10;
                var startYear = 2016;
                var startHour = 7;
                var startMinute = 23;
                var startSeconds = 34;

                var endDay = 10;
                var endMonth = 10;
                var endYear = 2016;
                var endHour = 14;
                var endMinute = 5;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(false);

                expect(result).to.equal(0);
            });

            it('Should return 1 day with dates between 10 10 2016 05:56:34 and 10 10 2016 14:05:50, including last day', () => {
                var startDay = 10;
                var startMonth = 10;
                var startYear = 2016;
                var startHour = 5;
                var startMinute = 56;
                var startSeconds = 34;

                var endDay = 10;
                var endMonth = 10;
                var endYear = 2016;
                var endHour = 14;
                var endMinute = 5;
                var endSeconds = 50;

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getDays(true);

                expect(result).to.equal(1);
            });
        });

        describe('With individual unit parameters for Day, Month, Year,Hour, Minute and Seconds as strings', () => {
            it('Should return 91676 days with dates between "31" "12" "1899" "7" "23" "34" and "31" "12" "2150" "14" "5" "50", excluding last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1899";
                var startHour = "7";
                var startMinute = "23";
                var startSeconds = "34";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2150";
                var endHour = "14";
                var endMinute = "5";
                var endSeconds = "50";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(false);

                expect(result).to.equal(91676);
            });

            it('Should return 91677 days with dates between "31" "12" "1899" "9" "30" "0" and "31" "12" "2150" "21" "5" "20", including last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1899";
                var startHour = "9";
                var startMinute = "30";
                var startSeconds = "0";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2150";
                var endHour = "21";
                var endMinute = "5";
                var endSeconds = "20";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(true);

                expect(result).to.equal(91677);
            });

            it('Should return 0 day with dates between "10" "10" "2016" "9" "30" "0" and "10" "10" "2016" "21" "5" "20", excluding last day', () => {
                var startDay = "10";
                var startMonth = "10";
                var startYear = "2016";
                var startHour = "9";
                var startMinute = "30";
                var startSeconds = "0";

                var endDay = "10";
                var endMonth = "10";
                var endYear = "2016";
                var endHour = "21";
                var endMinute = "5";
                var endSeconds = "20";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(false);

                expect(result).to.equal(0);
            });

            it('Should return 0 days with dates between "10" "10" "2016" "9" "30" "0" and "10" "10" "2016" "23" "5" "20"', () => {
                var startDay = "10";
                var startMonth = "10";
                var startYear = "2016";
                var startHour = "9";
                var startMinute = "30";
                var startSeconds = "0";

                var endDay = "10";
                var endMonth = "10";
                var endYear = "2016";
                var endHour = "23";
                var endMinute = "5";
                var endSeconds = "20";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getDays(false);

                expect(result).to.equal(0);
            });
        });
    });
});