"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Minutes', () => {

    describe('Calculation difference in minutes with two dates', () => {
        it('Should return 1051200 minutes between 01/01/2013 and 01/01/2015 excluding last day', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(1051200);
        });

        it('Should return 1052640 minutes between 01/01/2013 and 01/01/2015 including last day', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(1052640);
        });

        it('Should return 308160 minutes between 01/06/2014 and 01/01/2015 excluding last day', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(308160);
        });

        it('Should return 309600 minutes between 01/06/2014 and 01/01/2015 including last day', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(309600);
        });

        it('Should return 23302080 minutes with dates between 01/01/1970 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(23302080);
        });

        it('Should return 23300640 minutes with dates between 01/01/1970 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(23300640);
        });

        it('Should return 7524000 minutes with dates between 01/01/2000 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);
            
            expect(minutes).to.equal(7524000);
        });

        it('Should return 7522560 minutes with dates between 01/01/2000 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            var minutes = shado.date.set(firstDate, secondDate).getMinutes(false);

            expect(minutes).to.equal(7522560);
        });

        describe('with time segment', () => {
            it('Should return 4733280 minutes with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var minutes = shado.date.set(firstDate, secondDate).getMinutes();
    
                expect(minutes).to.equal(4733280);
            });

            it('Should return 27133438 minutes with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var minutes = shado.date.set(firstDate, secondDate).getMinutes();

                expect(minutes).to.equal(27133438);
            });

            it('Should return 958 minutes with dates between 01/01/2019 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/01/2019 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var minutes = shado.date.set(firstDate, secondDate).getMinutes();
    
                expect(minutes).to.equal(958);
            });

            describe('ISO 8601 format', () => {
                it('Should return 2630880 minutes with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var minutes = shado.date.set(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(2630880);
                });

                it('Should return 2630880 minutes with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z last day ignored as time is provied', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var minutes = shado.date.set(firstDate, secondDate).getMinutes(true);
        
                    expect(minutes).to.equal(2630880);
                });

                it('Should return 19068725 minutes with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var minutes = shado.date.set(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(19068725);
                });

                it('Should return 659765 minutes with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var minutes = shado.date.set(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(659765);
                });

                it('Should return 52069195 minutes with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var minutes = shado.date.set(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(52069195);
                });

                it('Should return 52067755 minutes with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var minutes = shado.date.set(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(52067755);
                });

                it('Should return 27133438 minutes with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "1967-06-01T03:34:25:233Z";
                    var secondDate = "2019-01-01T19:32:44:12Z";
                    var minutes = shado.date.set(firstDate, secondDate).getMinutes();
                    
                    expect(minutes).to.equal(27133438);
                });
            });
        });

        describe('In US date format', () => {
            it('Should return 1051200 minutes between 01/01/2013 and 01/01/2015 excluding last day', () => {
                var firstDate = "01/01/2013";
                var secondDate = "01/01/2015";
                shado.date.set(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(false);

                expect(minutes).to.equal(1051200);
            });

            it('Should return 1052640 minutes between 01/01/2013 and 01/01/2015 including last day', () => {
                var firstDate = "01/01/2013";
                var secondDate = "01/01/2015";
                shado.date.set(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(true);

                expect(minutes).to.equal(1052640);
            });

            it('Should return 308160 minutes between 06/01/2014 and 01/01/2015 excluding last day', () => {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.set(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(false);

                expect(minutes).to.equal(308160);
            });

            it('Should return 309660 minutes between 01/06/2014 and 01/01/2015 including last day', () => {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.set(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(true);

                expect(minutes).to.equal(309600);
            });

            it('Should return 23302080 minutes with dates between 01/01/1970 and 04/21/2014 including last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(true);

                expect(minutes).to.equal(23302080);
            });

            it('Should return 23300640 minutes with dates between 01/01/1970 and 21/04/2014 excluding last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(false);

                expect(minutes).to.equal(23300640);
            });

            describe('with time segment', () => {
                it('Should return 5785920 minutes dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var minutes = shado.date.set(firstDate, secondDate, true).getMinutes();
        
                    expect(minutes).to.equal(5785920);
                });
    
                it('Should return 27133438 minutes with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var minutes = shado.date.set(firstDate, secondDate, true).getMinutes();
        
                    expect(minutes).to.equal(27133438);
                });
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute and Seconds as numbers', () => {
            it('Should return 132014383 minutes with dates between 31 12 1899 03:01:34 and 31 12 2150 18:44:50, excluding last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 3;
                var startMinute = 1;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 18;
                var endMinute = 44;
                var endSeconds = 50;
                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getMinutes(false);

                expect(result).to.equal(132014383);
            });

            it('Should return 132015823 minutes with dates between 31 12 1899 03:01:34 and 31 12 2150 18:44:50, including last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 3;
                var startMinute = 1;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 18;
                var endMinute = 44;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(132015823);
            });

            it('Should return 1440 minutes with dates between 1 1 2016 0:00:00 and 2 1 2016 0:00:00, excluding last day', () => {
                var startDay = 1;
                var startMonth = 1;
                var startYear = 2016;
                var startHour = 0;
                var startMinute = 0;
                var startSeconds = 0;

                var endDay = 2;
                var endMonth = 1;
                var endYear = 2016;
                var endHour = 0;
                var endMinute = 0;
                var endSeconds = 0;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(1440);
            });

            it('Should return 2880 minutes with dates between 1 1 2016 0:00:00 and 2 1 2016 0:00:00, including last day', () => {
                var startDay = 1;
                var startMonth = 1;
                var startYear = 2016;
                var startHour = 0;
                var startMinute = 0;
                var startSeconds = 0;

                var endDay = 2;
                var endMonth = 1;
                var endYear = 2016;
                var endHour = 0;
                var endMinute = 0;
                var endSeconds = 0;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(2880);
            });

            it('Should return 1440 minutes with dates between 1 1 2016 0:00:00 and 1 1 2016 0:00:00, including last day', () => {
                var startDay = 1;
                var startMonth = 1;
                var startYear = 2016;
                var startHour = 0;
                var startMinute = 0;
                var startSeconds = 0;

                var endDay = 1;
                var endMonth = 1;
                var endYear = 2016;
                var endHour = 0;
                var endMinute = 0;
                var endSeconds = 0;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(1440);
            });

            it('Should return 0 minutes with dates between 1 1 2016 and 1 1 2016, excluding last day', () => {
                var startDay = 1;
                var startMonth = 1;
                var startYear = 2016;
                var startHour = 0;
                var startMinute = 0;
                var startSeconds = 0;

                var endDay = 1;
                var endMonth = 1;
                var endYear = 2016;
                var endHour = 0;
                var endMinute = 0;
                var endSeconds = 0;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month, Year, Hour, Minute, Seconds as strings', () => {
            it('Should return 132013970 minutes with dates between "31" "12" "1899" "8" "15" "0" and "31" "12" "2150" "17" "5" "0", excluding last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1899";
                var startHour = "8";
                var startMinute = "15";
                var startSeconds = "0";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2150";
                var endHour = "17";
                var endMinute = "5";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(132013970);
            });

            it('Should return 132015410 minutes with dates between "31" "12" "1899" "8" "15" "0" and "31" "12" "2150" "17" "5" "0" including last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1899";
                var startHour = "8";
                var startMinute = "15";
                var startSeconds = "0";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2150";
                var endHour = "17";
                var endMinute = "5";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(132015410);
            });

            it('Should return 1440 minutes with dates between "1" "1" "2030" "0" "0" "0" and "1" "1" "2030" "0" "0" "0", including last day', () => {
                var startDay = "1";
                var startMonth = "1";
                var startYear = "2030";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "1";
                var endMonth = "1";
                var endYear = "2030";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getMinutes(true);

                expect(result).to.equal(1440);
            });

            it('Should return 0 minutes with dates between "1" "1" "2030" "0" "0" "0" and "1" "1" "2030" "0" "0" "0" , excluding last day', () => {
                var startDay = "1";
                var startMonth = "1";
                var startYear = "2030";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "1";
                var endMonth = "1";
                var endYear = "2030";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(0);
            });
        });
    });
});