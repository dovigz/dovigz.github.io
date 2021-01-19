"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Hours', () => {

    describe('Calculation difference in hours with two dates', () => {
        it('Should return 5136 hours between 01/06/2014 and 01/01/2015 excluding last day', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours();

            expect(hours).to.equal(5136);
        });

        it('Should return 343392 hours with dates between 18/02/1975 and 21/04/2014 including last day', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(343392);
        });

        it('Should return 343368 hours with dates between 18/02/1975 and 21/04/2014 excluding last day', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(343368);
        });

        it('Should return 24 hours with dates between 01/01/2014 and 02/01/2014 excluding last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(24);
        });

        it('Should return 48 hours with dates between 01/01/2014 and 02/01/2014 including last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(48);
        });

        it('Should return 125400 hours with dates between 01/01/2000 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(125400);
        });

        it('Should return 125376 hours with dates between 01/01/2000 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(125376);
        });

        it('Should return 388368 hours with dates between 01/01/1970 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(388368);
        });

        it('Should return 388344 hours with dates between 01/01/1970 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(388344);
        });

        it('Should return 563688 hours with dates between 31/12/1949 and 21/04/2014 excluding last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.set(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(563688);
        });

        it('Should return 563712 hours with dates between 31/12/1949 and 21/04/2014 including last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            var hours = shado.date.set(firstDate, secondDate).getHours(true);

            expect(hours).to.equal(563712);
        });

        describe('with time segment', () => {
            it('Should return 78888 hours with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var hours = shado.date.set(firstDate, secondDate).getHours();
    
                expect(hours).to.equal(78888);
            });

            it('Should return 452223 hours with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var hours = shado.date.set(firstDate, secondDate).getHours();
    
                expect(hours).to.equal(452223);
            });

            it('Should return 15 hours with dates between 01/01/2019 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/01/2019 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var hours = shado.date.set(firstDate, secondDate).getHours();
    
                expect(hours).to.equal(15);
            });

            describe('ISO 8601 format', () => {
                it('Should return 43848 hours with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var hours = shado.date.set(firstDate, secondDate).getHours();
        
                    expect(hours).to.equal(43848);
                });

                it('Should return 43848 hours with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z last day ignored as time part is provided', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var hours = shado.date.set(firstDate, secondDate).getHours(true);
        
                    expect(hours).to.equal(43848);
                });

                it('Should return 317812 hours with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var hours = shado.date.set(firstDate, secondDate).getHours();
        
                    expect(hours).to.equal(317812);
                });

                it('Should return 10996 hours with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var hours = shado.date.set(firstDate, secondDate).getHours();
        
                    expect(hours).to.equal(10996);
                });

                it('Should return 867819 hours with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var hours = shado.date.set(firstDate, secondDate).getHours();
        
                    expect(hours).to.equal(867819);
                });

                it('Should return 867795 hours with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var hours = shado.date.set(firstDate, secondDate).getHours();
        
                    expect(hours).to.equal(867795);
                });

                it('Should return 452223 hours with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "1967-06-01T03:34:25:233Z";
                    var secondDate = "2019-01-01T19:32:44:12Z";
                    var hours = shado.date.set(firstDate, secondDate).getHours();
        
                    expect(hours).to.equal(452223);
                });
            });
        });

        describe('In US date format', () => {
            it('Should return 343368 hours with dates between 02/18/1975 and 04/21/2014 excluding last day', () => {
                var firstDate = "02/18/1975";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(343368);
            });

            it('Should return 24 hours with dates between 01/01/2014 and 01/02/2014 excluding last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.set(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(24);
            });

            it('Should return 125400 hours with dates between 01/01/2000 and 04/21/2014 including last day', () => {
                var firstDate = "01/01/2000";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var hours = shado.date.getHours(true);

                expect(hours).to.equal(125400);
            });

            it('Should return 388368 hours with dates between 01/01/1970 and 04/21/2014 including last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var hours = shado.date.getHours(true);

                expect(hours).to.equal(388368);
            });

            it('Should return 388344 hours with dates between 01/01/1970 and 04/21/2014 excluding last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(388344);
            });

            it('Should return 563688 hours with dates between 12/31/1949 and 04/21/2014 excluding last day', () => {
                var firstDate = "12/31/1949";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(563688);
            });

            it('Should return 563712 hours with dates between 12/31/1949 and 04/21/2014 including last day', () => {
                var firstDate = "12/31/1949";
                var secondDate = "04/21/2014";
                shado.date.set(firstDate, secondDate, true);
                var hours = shado.date.getHours(true);

                expect(hours).to.equal(563712);
            });

            describe('with time segment', () => {
                it('Should return 96432 hours dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var hours = shado.date.set(firstDate, secondDate, true).getHours();
        
                    expect(hours).to.equal(96432);
                });
    
                it('Should return 452223 hours with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var hours = shado.date.set(firstDate, secondDate, true).getHours();
        
                    expect(hours).to.equal(452223);
                });
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 2200227 hours with dates between 31 12 1899 10:45:34 and 31 12 2150 14:07:50, excluding last day', () => {
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

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getHours(false);

                expect(result).to.equal(2200227);
            });

            it('Should return 2200252 hours with dates between 31 12 1899 10:01:34 and 31 12 2150 14:44:50, including last day', () => {
                var startDay = 31;
                var startMonth = 12;
                var startYear = 1899;
                var startHour = 10;
                var startMinute = 1;
                var startSeconds = 34;

                var endDay = 31;
                var endMonth = 12;
                var endYear = 2150;
                var endHour = 14;
                var endMinute = 44;
                var endSeconds = 50;

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getHours(true);
                expect(result).to.equal(2200252);
            });

            it('Should return 24 hours with dates between 1 1 2016 0:00:00 and 1 1 2016 0:00:00, including last day', () => {
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
                var result = shado.date.getHours(true);

                expect(result).to.equal(24);
            });

            it('Should return 0 hours with dates between 1 1 2016 0:00:00 and 1 1 2016 0:00:00, excluding last day', () => {
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
                var result = shado.date.getHours(false);

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 876615 hours with dates between "31" "12" "1920" "3" "1" "34" and "31" "12" "2020" "18" "44" "50", excluding last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1920";
                var startHour = "3";
                var startMinute = "1";
                var startSeconds = "34";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2020";
                var endHour = "18";
                var endMinute = "44";
                var endSeconds = "50";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getHours(false);

                expect(result).to.equal(876615);
            });

            it('Should return 876624 hours with dates between "31" "12" "1920" "0" "0" "0" and "31" "12" "2020" "0" "0" "0", including last day', () => {
                var startDay = "31";
                var startMonth = "12";
                var startYear = "1920";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "31";
                var endMonth = "12";
                var endYear = "2020";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getHours(true);

                expect(result).to.equal(876624);
            });

            it('Should return 24 hours with dates between "01" "01" "2010" "0" "0" "0" and "01" "01" "2010" "0" "0" "0", including last day', () => {
                var startDay = "01";
                var startMonth = "01";
                var startYear = "2010";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "01";
                var endMonth = "01";
                var endYear = "2010";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getHours(true);

                expect(result).to.equal(24);
            });

            it('Should return 0 hours with dates between "01" "01" "2010" "0" "0" "0" and "01" "01" "2010" "0" "0" "0", excluding last day', () => {
                var startDay = "01";
                var startMonth = "01";
                var startYear = "2010";
                var startHour = "0";
                var startMinute = "0";
                var startSeconds = "0";

                var endDay = "01";
                var endMonth = "01";
                var endYear = "2010";
                var endHour = "0";
                var endMinute = "0";
                var endSeconds = "0";

                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
                var result = shado.date.getHours(false);

                expect(result).to.equal(0);
            });
        });
    });
});
