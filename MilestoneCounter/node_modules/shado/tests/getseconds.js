"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Seconds', () => {
    
    describe('Calculation difference in seconds with two dates', () => {
        it('Should return 451526400 seconds with dates between 01/01/2000 and 22/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "22/04/2014";
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);

            expect(seconds).to.equal(451526400);
        });

        it('Should return 451440000 seconds with dates between 01/01/2000 and 22/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "22/04/2014";
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);
            
            expect(seconds).to.equal(451440000);
        });

        it('Should return 1398211200 seconds with dates between 01/01/1970 and 22/04/2014 including last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "22/04/2014";
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);

            expect(seconds).to.equal(1398211200);
        });

        it('Should return 1398124800 seconds with dates between 01/01/1970 and 22/04/2014 excluding last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "22/04/2014";
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(1398124800);
        });

        it('Should return 691200 seconds with dates between 14/04/2014 and 21/04/2014 including last day', () => {
            var firstDate = "14/04/2014";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);

            expect(seconds).to.equal(691200);
        });

        it('Should return 604800 seconds with dates between 14/04/2014 and 21/04/2014 excluding last day', () => {
            var firstDate = "14/04/2014";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(604800);
        });

        it('Should return 3607632000 seconds with dates between 01/01/1900 and 27/04/2014 including last day', () => {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            shado.date.set(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);
            
            expect(seconds).to.equal(3607632000);
        });

        it('Should return 3607545600 seconds with dates between 01/01/1900 and 27/04/2014 excluding last day', () => {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            var seconds = shado.date.set(firstDate, secondDate).getSeconds(false);
            
            expect(seconds).to.equal(3607545600);
        });

        describe('with time segment', () => {
            it('Should return 283996800 seconds with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var seconds = shado.date.set(firstDate, secondDate).getSeconds();
    
                expect(seconds).to.equal(283996800);
            });

            it('Should return 1628006280 seconds with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var seconds = shado.date.set(firstDate, secondDate).getSeconds();

                expect(seconds).to.equal(1628006280);
            });

            it('Should return 57480 seconds with dates between 01/01/2019 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/01/2019 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var seconds = shado.date.set(firstDate, secondDate).getSeconds();
    
                expect(seconds).to.equal(57480);
            });

            describe('ISO 8601 format', () => {
                it('Should return 157852800 seconds with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var seconds = shado.date.set(firstDate, secondDate).getSeconds();
        
                    expect(seconds).to.equal(157852800);
                });

                it('Should return 157939200 seconds with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z ignored last day as time is provided', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var seconds = shado.date.set(firstDate, secondDate).getSeconds(true);
        
                    expect(seconds).to.equal(157852800);
                });

                it('Should return 1144123500 seconds with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var seconds = shado.date.set(firstDate, secondDate).getSeconds();
        
                    expect(seconds).to.equal(1144123500);
                });

                it('Should return 39585900 seconds with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var seconds = shado.date.set(firstDate, secondDate).getSeconds();

                    expect(seconds).to.equal(39585900);
                });

                it('Should return 3124151700 seconds with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var seconds = shado.date.set(firstDate, secondDate).getSeconds();
        
                    expect(seconds).to.equal(3124151700);
                });

                it('Should return 3124065300 seconds with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var seconds = shado.date.set(firstDate, secondDate).getSeconds();
        
                    expect(seconds).to.equal(3124065300);
                });

                it('Should return 1628006280 seconds with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "1967-06-01T03:34:25:233Z";
                    var secondDate = "2019-01-01T19:32:44:12Z";
                    var seconds = shado.date.set(firstDate, secondDate).getSeconds();

                    expect(seconds).to.equal(1628006280);
                });
            });
        });

        describe('In US date format', () => {
            it('Should return 1398124800 seconds with dates between 01/01/1970 and 04/22/2014 excluding last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/22/2014";
                shado.date.set(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(false);

                expect(seconds).to.equal(1398124800);
            });

            it('Should return 1398211200 seconds with dates between 01/01/1970 and 04/22/2014 including last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/22/2014";
                shado.date.set(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(true);

                expect(seconds).to.equal(1398211200);
            });

            it('Should return 691200 seconds with dates between 04/14/2014 and 04/21/2014 including last day', () => {
                var firstDate = "04/14/2014";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(true);

                expect(seconds).to.equal(691200);
            });

            it('Should return 604800 seconds with dates between 04/14/2014 and 04/21/2014 excluding last day', () => {
                var firstDate = "04/14/2014";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(false);

                expect(seconds).to.equal(604800);
            });

            it('Should return 3607545600 seconds with dates between 01/01/1900 and 04/27/2014 excluding last day', () => {
                var firstDate = "01/01/1900";
                var secondDate = "04/27/2014";
                shado.date.set(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(false);
                
                expect(seconds).to.equal(3607545600);
            });

            describe('with time segment', () => {
                it('Should return 347155200 seconds dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var seconds = shado.date.set(firstDate, secondDate, true).getSeconds();

                    expect(seconds).to.equal(347155200);
                });
    
                it('Should return 1628006280 seconds with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var seconds = shado.date.set(firstDate, secondDate, true).getSeconds();
        
                    expect(seconds).to.equal(1628006280);
                });
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as numbers', () => {
            it('Should return 7920817020 seconds with dates between 31 12 1899 12:02:34 and 31 12 2150 15:00:00, excluding last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 12;
                var startMinute = 2;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 15;
                var endMinute = 0;
                var endSeconds = 0;

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getSeconds(false);

                expect(result).to.equal(7920817020);
            });

            it('Should return 7920903420 seconds with dates between 31 12 1899 12:02:34 and 31 12 2150 15:00:00, including last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 12;
                var startMinute = 2;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 15;
                var endMinute = 0;
                var endSeconds = 0;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getSeconds(true);

                expect(result).to.equal(7920903420);
            });

            it('Should return 84600 seconds with dates between 1 1 2016 12:02:34 and 1 1 2016 12:02:34, including last day', () => {
                var startDay = 1;
                var startMonth = 1;
                var startYear = 2016;
                var startHour = 12;
                var startMinute = 2;
                var startSeconds = 34;

                var endDay = 1;
                var endMonth = 1;
                var endYear = 2016;
                var endHour = 12;
                var endMinute = 2;
                var endSeconds = 34;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getSeconds(true);

                expect(result).to.equal(86400);
            });

            it('Should return 0 seconds with dates between 1 1 2016 12:02:34 and 1 1 2016 12:02:34, excluding last day', () => {
                var startDay = 1;
                var startMonth = 1;
                var startYear = 2016;
                var startHour = 12;
                var startMinute = 2;
                var startSeconds = 34;

                var endDay = 1;
                var endMonth = 1;
                var endYear = 2016;
                var endHour = 12;
                var endMinute = 2;
                var endSeconds = 34;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getSeconds(false);

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as strings', () => {
            it('Should return 7920806400 seconds with dates between "31" "12" "1899" "12" "02" "34" and "31" "12" "2150" "12" "02" "34", excluding last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1899";
                var startHour = "12";
                var startMinute = "02";
                var startSeconds = "34";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2150";
                var endHour = "12";
                var endMinute = "02";
                var endSeconds = "34";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getSeconds(false);

                expect(result).to.equal(7920806400);
            });

            it('Should return 7920892800 minutes with dates between "31" "12" "1899" "12" "02" "34" and "31" "12" "2150" "12" "02" "34", including last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1899";
                var startHour = "12";
                var startMinute = "02";
                var startSeconds = "34";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2150";
                var endHour = "12";
                var endMinute = "02";
                var endSeconds = "34";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getSeconds(true);

                expect(result).to.equal(7920892800);
            });

            it('Should return 84600 seconds with dates between "01" "01" "2009" "0" "0" "0" and "01" "01" "2009" "0" "0" "0", including last day', () => {
                var startDay = "01";
                var startMonth = "01";
                var startYear = "2009";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "01";
                var endMonth = "01";
                var endYear = "2009";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getSeconds(true);

                expect(result).to.equal(86400);
            });

            it('Should return 0 seconds with dates between "01" "01" "2009" "0" "0" "0" and "01" "01" "2009" "0" "0" "0", excluding last day', () => {
                var startDay = "01";
                var startMonth = "01";
                var startYear = "2009";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "01";
                var endMonth = "01";
                var endYear = "2009";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getSeconds(false);

                expect(result).to.equal(0);
            });
        });
    });
});