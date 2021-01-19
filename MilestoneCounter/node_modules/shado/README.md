shado.js
========

This is a JavaScript library to provide precise date and time comparison calculations between two dates for Years, Months, Days, Weeks, Hours, Minutes and Seconds.  The aim of this library is to assist JavaScript Developers in taking away the pain of date handling in JavaScript.

Installation
------------

Latest stable version:

    npm install shado --save

Instructions on how to use
--------------------------

1.  The set Method (previously named setDates)

    The method takes three parameters for start date and end date with an optional boolean true indicating requirement to use US date format.  The default is the UK date format.  Both date parameters can be a string or JavaScript Date Object.  If using Date Objects the optional boolean parameter is not relevant, because system settings take over the date formatting.  The call to the set method does not require the use of the "new" key word to instantiate the object.  The namespace pattern is used exposing the methods required.  If either parameter is not a string and date type, an exception will be raised with the error message of 'Parameters expected should be of type string or date'.  Also if the end date is passed into the start date parameter with the start date as the end data parameter, an error exception is raised with the error message of 'The end date cannot be before the start date'.

    The set method returns the methods through the use of dot notation (method chaining) in one line of code as described in section 3.  Functionality remains in place allowing calls to the calculation methods to be made separately as described in section 4.

    Supported Date/Time Formats

    The set method supports the inclusion of the time segment with the date.  The ISO-8601 standard is implemented alongside two other formats for both start and end date parameters.  An exception is raised with the error message of 'Invalid date/time pattern provided' if a date or time is provided in a different format that is not supported.

        1999-06-10T14:50:25:545Z - IS0-8601 Standard
        01/06/1967 03:34:25:233  - Date with time segment
        29-02-2012               - Date only

    With exception of the IS0-8601 standard, both hyden and forward lash can both be applied as separators

    Example UK Date Format using string parameters:

        var shado = require("shado");

        var startDate = "01-01-1970";
        var endDate = "01/01/1986";
        var result = shado.date.set(startDate, endDate).getDays(false);

    Example ISO-8601 Format using string parameters:

        var shado = require("shado");

        var startDate = "1999-06-10T14:50:25:545Z";
        var endDate = "2019-04-11T16:34:28:019Z";
        var result = shado.date.set(startDate, endDate).getDays(false);

    Example UK Date/Time Format using string parameters:

        var shado = require("shado");

        var startDate = "01-01-1970 03:34:25:233";
        var endDate = "01/01/1986 15:55:45:239";
        var result = shado.date.set(startDate, endDate).getMinutes();

    Example US Date Format using string parameters:

        var shado = require("shado");

        var startDate = "02/01/1970";
        var endDate = "10/01/1986";
        var result = shado.date.set(startDate, endDate, true).getDays(true);

    Example of Date Object parameters:

        var shado = require("shado");

        var startDate = new Date(2000, 0, 1);
        var endDate = new Date(2014, 3, 22);
        var result = shado.date.set(startDate, endDate).getWeeks();

    Example of mixed types of string and instantiated date object:

        var shado = require("shado");

        var startDate = "01/01/1970";
        var endDate = new Date(2014, 3, 27);
        var result = shado.date.set(startDate, endDate).getYears();

2.  The setParams Method (previously named setDatesByUnits)

    This method allows individual date units of Day, Month, Year, Hour, Minute and Seconds to be passed in as separate parameters, providing additional option as to date input.  The parameter type can be a number or string.  The string numbers can have an optional 0 prefix on them, for example '01'.  As with the set method, the setParams method does not require the use of the "new" key word to instantiate the object.   If the parameters are not a number and string type, an exception will be raised with the error message of 'Parameters expected should be of type string or date'.  Also if the end date is passed into the start date parameter with the start date as the end data parameter, an error exception is raised with the error message of 'The end date cannot be before the start date'.

    The setParams method returns the methods through the use of dot notation (method chaining) in one line of code as seen in the example below calling getYears().  Functionality remains in place allowing calls to the calculation methods to be made separately as described in section 4.

    Example of the setParams method:

        var shado = require("shado");

        var startDay = 31;
        var startMonth = 12;
        var startYear = 1899;
        var startHour = 11;
        var startMinute = 5;
        var startSeconds = 10;
        var endDay = 31;
        var endMonth = 12;
        var endYear = 2150;
        var endHour = 11;
        var endMinute = 59;
        var endSeconds = 59;
        var result = shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds).getYears();

3.  Calling either the set or setParams method.  Developers can call methods for Years, Months, Weeks, Days, Hours, Minutes and Seconds to return the calculated difference using dot notation.       

    Example:

        var shado = require("shado");

        var startDate = new Date(2000, 0, 1);
        var endDate = new Date(2014, 3, 22);
        var years = shado.date.set(startDate, endDate).getYears();
        var months = shado.date.set(startDate, endDate).getMonths();
        var weeks = shado.date.set(startDate, endDate).getWeeks();
        var days = shado.data.set(startDate, endDate).getDays(false);
        var hours = shado.date.set(startDate, endDate).getHours(false);
        var minutes = shado.date.set(startDate, endDate).getMinutes(false);
        var seconds = shado.date.set(startDate, endDate).getSeconds(false);

4.  For calculating Days, Hours, Minutes and Seconds there is one boolean parameter required for the inclusion of the last day in the calculated result.
    Therefore, true = include last day, false = exclude last day (or not provided).  This is not optional for the use of true.  This example shows the calculation methods called separately. If using the boolean parameter set to true with a time segment, including last day is adding on 1 day.

    Example:

        var shado = require("shado");
        shado.date.set("1999-06-10T14:50:25:545Z", "2019-04-11T16:34:28:019Z");

        var days = shado.date.getDays(false); //exclude last day.
        var days = shado.date.getDays(true);  //include last day.

        var hours = shado.date.getHours(false); //exclude last day.
        var hours = shado.date.getHours(true);  //include last day.

        var minutes = shado.date.getMinutes(false); //exclude last day.
        var minutes = shado.date.getMinutes(true)); //include last day.

        var seconds = shado.date.getSeconds(false); //exclude last day.
        var seconds = shado.date.getSeconds(true);  //include last day.

Date Formatting
---------------

1.  The format method

    The method requires 3 parameters.  The first is the date either has a string or date object.  The second is the format pattern used to transform the date into the desired result.  The third paramter is a boolean indicating whether the date parameter is in US format (true) or UK format (false or not provided).  The date parameter as a string supports both hydens - and forward lash / as separators.

    Example:

        var shado = require("shado");

        var result = shado.date.format("02-09-2018 06:15:34:126", "DDDD OI MMMM, yyyy - HH:mm:SS:sss");

    The date must be provided in US format for the format method to create the result correctly with the third parameter set to true.

    Example US Date Format:

        var shado = require("shado");

        var result = shado.date.format("09/02/2018", "DDDD OI MMMM, yyyy - HH:mm:SS:sss", true);

    If using Date Objects the optional boolean parameter is not relevant.  The Date Object uses system settngs.
    
    Example using Date Object:

        var shado = require("shado");

        var result = shado.date.format(new Date(2018, 8, 2, 6, 15, 34, 126), "DDDD OI MMMM, yyyy - HH:mm:SS:sss");

    The result: Sunday 2nd September, 2018 - 06:15:34:126

    Example using IS0-8601 Standard:

        var shado = require("shado");

        var result = shado.date.format("1999-06-10T14:50:25:545Z", "DDDD OI MMMM yyyy, HH:mm:SS:sss");

    The result: Thursday 10th June 1999, 14:50:25:545

2.  Supported formats

        M: Month number (1, 2, 3... 12)
        MM: Month number with leading zero (01, 02, 03... 12)
        MMM: Month abbreviation (Jan, Feb, Mar... Dec)
        MMMM: Month name (January, February, March... December)

        yyyy: Year number 1990, 2018, 2000
        yy: 90, 18, 00

        dd: 01..09, 10..20, 21..31
        d: 1..9, 10...20, 21..31
        OI: Day number with ordinal indicator (1st, 2nd, 3rd... 12th)
        DDD: Mon, Tues...Sun
        DDDD: Monday, Tuesday...Sunday

        HH: Hour number with leading zero (01, 02, 03.... 15,16... 23)
        h: Hour without leading zero (1,2,3.....9,15,16... 23)
        mm: Minute number with leading zero (01, 02, 03... 20,45... 59)
        SS: Second number with leading zero (01, 02, 03... 20,45... 59)
        sss: Milisecond number with two leading zeros (001,002....009,010,011... 999)

        Supports Hydens -, forward lash / as separators, commas and blank spaces.

Included with the library is the tests folder containing the js files developed to test drive the design of the shado.js code.  The tests can be viewed in the git repository. The Mocha Test Runner from npmjs.org is used to unit test each method.

Feedback:
---------

I am open to receiving feedback from developers that use this library and welcome pull requests that I will review and if accepted.  Those persons will be acknowledged for their contribution.

I want to contribute to the open source community.  My email address is: dj1701.io@gmail.com


Node Version:
-------------

From shado.js v1.3.0 bug fixes have been applied allowing support for Node v4.0.0 or later.	