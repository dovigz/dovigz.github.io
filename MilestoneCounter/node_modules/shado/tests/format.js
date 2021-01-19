"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Format Date', () => {
    [{ date: "01/11/2014", formatPattern: "dd/MM/yyyy", expectedDate: "01/11/2014" },
     { date: "01/02/2015", formatPattern: "dd/MM/yy", expectedDate: "01/02/15" },
     { date: "01/03/2015", formatPattern: "dd MMM, yyyy", expectedDate: "01 Mar, 2015" },
     { date: "10/11/2015", formatPattern: "dd MMMM, yyyy", expectedDate: "10 November, 2015" },
     { date: "10/11/1991", formatPattern: "OI MMMM, yyyy", expectedDate: "10th November, 1991" },
     { date: "01/11/1991", formatPattern: "OI MMMM, yyyy", expectedDate: "1st November, 1991" },
     { date: "02/02/1992", formatPattern: "OI MMMM, yyyy", expectedDate: "2nd February, 1992" },
     { date: "03/04/1999", formatPattern: "OI MMMM, yyyy", expectedDate: "3rd April, 1999" },
     { date: "04/04/2000", formatPattern: "OI MMMM, yyyy", expectedDate: "4th April, 2000" },
     { date: "21/07/2002", formatPattern: "OI MMMM, yyyy", expectedDate: "21st July, 2002" },
     { date: "30/06/2004", formatPattern: "OI MMMM, yyyy", expectedDate: "30th June, 2004" },
     { date: "31/12/2009", formatPattern: "OI MMMM, yyyy", expectedDate: "31st December, 2009" },
     { date: "04-04-2000", formatPattern: "dd-MM-yyyy", expectedDate: "04-04-2000" },
     { date: "04-04-2000", formatPattern: "dd-MMM-yyyy", expectedDate: "04-Apr-2000" },
     { date: "09-12-2010", formatPattern: "d-MMM-yyyy", expectedDate: "9-Dec-2010" },
     { date: "01-12-2010", formatPattern: "d-MMM-yyyy", expectedDate: "1-Dec-2010" },
     { date: "04-04-2000", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Tuesday 4th April, 2000" },
     { date: "29-08-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Wednesday 29th August, 2018" },
     { date: "02-09-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Sunday 2nd September, 2018" },
     { date: "25-08-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Saturday 25th August, 2018" },
     { date: "01-12-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Saturday 1st December, 2018" },
     { date: "01-12-2018", formatPattern: "DDD OI MMMM, yyyy", expectedDate: "Sat 1st December, 2018" },
     { date: "01-12-2018", formatPattern: "DDD-dd-MMM, yyyy", expectedDate: "Sat-01-Dec, 2018" },
     { date: "26-08-2018", formatPattern: "DDD dd MMM", expectedDate: "Sun 26 Aug" },
     { date: "26-08-2018", formatPattern: "DDD OI MMM", expectedDate: "Sun 26th Aug" },
     { date: "17-09-2019 20:15:54", formatPattern: "DDD OI MMM HH:mm:SS", expectedDate: "Tue 17th Sep 20:15:54" },
     { date: "01/08/1980 06:15:34:126", formatPattern: "DDD OI MMM yyyy HH:mm:SS:sss", expectedDate: "Fri 1st Aug 1980 06:15:34:126" },
     { date: "22/10/1965 22:30:00:000", formatPattern: "DDDD OI MMMM yyyy, HH:mm:SS:sss", expectedDate: "Friday 22nd October 1965, 22:30:00:000"},
     { date: "23/09/2009 9:05:09:037", formatPattern: "DDDD OI MMMM yyyy - h:mm:SS:sss", expectedDate: "Wednesday 23rd September 2009 - 9:05:09:037"},
     { date: "01/12/2019 7:14:01", formatPattern: "DDD d MMM yyyy - h:mm:SS", expectedDate: "Sun 1 Dec 2019 - 7:14:01"},
     { date: "01/12/2019 07:14:01", formatPattern: "HH:mm:SS", expectedDate: "07:14:01"},
     { date: "1999-06-10T14:50:25:545Z", formatPattern: "DDDD OI MMMM yyyy, HH:mm:SS:sss", expectedDate: "Thursday 10th June 1999, 14:50:25:545"}
    ].forEach(function (data) {
        it('Should format date ' + data.date + ' with given format string of ' + data.formatPattern + ' with expected result of ' + data.expectedDate, () => {
            var result = shado.date.format(data.date, data.formatPattern);
            expect(result).to.equal(data.expectedDate);
        });
    });

    describe('In US date format', () => {
        [{ date: "11/01/2014", formatPattern: "MM/dd/yyyy", expectedDate: "11/01/2014" },
         { date: "07/21/2002", formatPattern: "OI MMMM, yyyy", expectedDate: "21st July, 2002" },
         { date: "12-01-2018", formatPattern: "DDD-dd-MMM, yyyy", expectedDate: "Sat-01-Dec, 2018" },
         { date: "08-29-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Wednesday 29th August, 2018" },
         { date: "08-29-2018 09:18:22:090", formatPattern: "DDDD OI MMMM, yyyy - HH:mm:SS:sss", expectedDate: "Wednesday 29th August, 2018 - 09:18:22:090" },
         { date: "09-17-2019 21:44:45", formatPattern: "DDDD OI MMMM, yyyy - h:mm:SS", expectedDate: "Tuesday 17th September, 2019 - 21:44:45" },
         { date: "09-17-2019 7:14:01", formatPattern: "h:mm:SS", expectedDate: "7:14:01"}
        ].forEach(function (data) {
            it('Should format date ' + data.date + ' with given format string of ' + data.formatPattern + ' with expected result of ' + data.expectedDate, () => {
                var result = shado.date.format(data.date, data.formatPattern, true);
                expect(result).to.equal(data.expectedDate);
            });
        });
    });

    describe('Date object as date parameter', () => {
        [{ date: "01/11/2018", formatPattern: "dd/MM/yyyy", expectedDate: "01/11/2018" },
         { date: "01/05/1977", formatPattern: "OI MMMM, yyyy", expectedDate: "1st May, 1977" },
         { date: "30/06/2004", formatPattern: "OI MMMM, yyyy", expectedDate: "30th June, 2004" },
         { date: "25-09-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Tuesday 25th September, 2018" },
         { date: "02-12-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Sunday 2nd December, 2018" },
         { date: "02-12-2018 05:18:45:010", formatPattern: "DDDD OI MMMM, yyyy - HH:mm:SS:sss", expectedDate: "Sunday 2nd December, 2018 - 05:18:45:010" }
        ].forEach(function (data) {
            it('Should format date ' + data.date + ' with given format string of ' + data.formatPattern + ' with expected result of ' + data.expectedDate, () => {
                var dateString = undefined;
                var date = undefined;
                var dateTimePattern = /^(\d{2})[\/|-](\d{2})[\/-](\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?::(\d{1,3}))?/;

                if(dateTimePattern.test(data.date)) {
                    dateString = data.date.match(dateTimePattern);
                    date = new Date(dateString[3], dateString[2] - 1, dateString[1], dateString[4], dateString[5], dateString[6], dateString[7]);
                } else {
                    var dateSegmentOnlyPattern = /^(\d{2})[\/|-](\d{2})[\/-](\d{4})/;
                    if(dateSegmentOnlyPattern.test(data.date)) {
                        dateString = data.date.match(dateSegmentOnlyPattern);
                        date = new Date(dateString[3], dateString[2] - 1, dateString[1]);
                    }
                }

                var result = shado.date.format(date, data.formatPattern);
                expect(result).to.equal(data.expectedDate);
            });
        });
    });

    describe('Invalid parameters', () => {
        it('Should raise exception if parameter is not a number or date', () => {
            expect(() => {
                shado.date.format(new Array(), 1);
            }).to.throw('Parameters expected should be of type string or date');
        });
    });
});