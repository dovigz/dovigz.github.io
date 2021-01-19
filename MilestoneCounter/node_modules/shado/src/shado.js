var shado = shado || {};

(function (ns) {

    var oneDayDuration = 1000 * 60 * 60 * 24;
    var difference = 0;
    var startDate = 0;
    var endDate = 0;
    var timeSegmentPresent = false;


    var validateParamaters = (beginDate, endDate) => {
        var isInvalidFirstDateParams = (Object.prototype.toString.call(beginDate) !== "[object String]" && Object.prototype.toString.call(beginDate) !== "[object Date]");
        var isInvalidSecondDateParams = (Object.prototype.toString.call(endDate) !== "[object String]" && Object.prototype.toString.call(endDate) !== "[object Date]");
        if (isInvalidFirstDateParams || isInvalidSecondDateParams) throw new Error('Parameters expected should be of type string or date');
    };

    var validateParamatersByUnit = (day, month, year, hour, minute, second) => {
        var isInvalid = (Object.prototype.toString.call(day) !== "[object Number]" && Object.prototype.toString.call(day) !== "[object String]") ||
                        (Object.prototype.toString.call(month) !== "[object Number]" && Object.prototype.toString.call(month) !== "[object String]") || 
                        (Object.prototype.toString.call(year) !== "[object Number]" && Object.prototype.toString.call(year) !== "[object String]") || 
                        (Object.prototype.toString.call(hour) !== "[object Number]" && Object.prototype.toString.call(hour) !== "[object String]") || 
                        (Object.prototype.toString.call(minute) !== "[object Number]" && Object.prototype.toString.call(minute) !== "[object String]") ||
                        (Object.prototype.toString.call(second) !== "[object Number]" && Object.prototype.toString.call(second) !== "[object String]");
        if (isInvalid) throw new Error('Parameters expected should be of type string or date');
    };

    var createDateFromParams = (day, month, year, hour, minute, second) => {
        timeSegmentPresent = false;
        return new Date(year, month - 1, day, hour, minute, second);
    };

    var getDifference = (startDate, endDate) => {
        var result = endDate.getTime() - startDate.getTime();
        if(result < 0) throw new Error("The end date cannot be before the start date");
        return result;
    };

    var createTimeSpans = (date) => {
        var monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
        var dayNames = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

        var applyLeadingZero = (unit, leadingZeroLength) => {
            var result = unit.toString();
            while (result.length <= leadingZeroLength) {result = "0" + result;}
            return result; 
        }

        var ordinalIndicatorSuffix = (day) => {var result = day % 10;if (result === 1) {return day + "st";}if (result === 2) {return day + "nd";}if(result === 3) {return day + "rd";}return day + "th";}
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var dayOfWeek = date.getDay();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milliseconds = date.getMilliseconds();
        return {
            "d": day, "dd": applyLeadingZero(day,1), "M": applyLeadingZero(month,1), "MM": applyLeadingZero(month,1),
            "MMM": monthNames[month + 11], "MMMM": monthNames[month - 1], "yyyy": date.getFullYear().toString(),
            "yy": date.getFullYear().toString().slice(2), "OI": ordinalIndicatorSuffix(day),
            "DDD": dayNames[dayOfWeek + 7], "DDDD": dayNames[dayOfWeek],
            "HH": applyLeadingZero(hours,1), "h": hours, "mm": applyLeadingZero(minutes,1), "SS": applyLeadingZero(seconds,1), "sss": applyLeadingZero(milliseconds,2)
        };
    }

    ns.date = ns.date || {};

    var extensions = _ => {
        return {
            getYears: ns.date.getYears,
            getMonths: ns.date.getMonths,
            getWeeks: ns.date.getWeeks,
            getDays: ns.date.getDays,
            getHours: ns.date.getHours,
            getMinutes: ns.date.getMinutes,
            getSeconds: ns.date.getSeconds
        };
    };

    ns.date.createDate = (date, useUsDateFormat) => {
        if (Object.prototype.toString.call(date) === "[object String]") {
            var customPatten = /^(\d{2})[\/|-](\d{2})[\/-](\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?::(\d{1,3}))?/;
            if(customPatten.test(date)){
                timeSegmentPresent = true;
                var dateString = date.match(customPatten);
                return useUsDateFormat ? new Date(Date.UTC(dateString[3], dateString[1] - 1, dateString[2], (dateString[4]|0), (dateString[5]|0), (dateString[6]|0), (dateString[7]|0)))
                     : new Date(Date.UTC((dateString[3]|0), (dateString[2]|0) - 1, (dateString[1]|0), (dateString[4]|0), (dateString[5]|0), (dateString[6]|0), (dateString[7]|0)));
            }
            var isoPattern = /^(\d{4})-(\d{2})-(\d{2})[T](\d{2}):(\d{2}):(\d{2}):(\d{1,3})[Z]/;
            if(isoPattern.test(date)){
                timeSegmentPresent = true;
                var dateString = date.match(isoPattern);
                return new Date(Date.UTC(dateString[1], dateString[2] - 1, dateString[3], (dateString[4]|0), (dateString[5]|0), (dateString[6]|0), (dateString[7]|0)));
            }
            var dateSegmentOnlyPattern = /^(\d{2})[\/|-](\d{2})[\/-](\d{4})/;
            if(dateSegmentOnlyPattern.test(date)) {
                timeSegmentPresent = false;
                var dateString = date.match(dateSegmentOnlyPattern);
                return useUsDateFormat ? new Date(Date.UTC(dateString[3], dateString[1] - 1, dateString[2], 0, 0, 0, 0)) : new Date(Date.UTC(dateString[3], dateString[2] - 1, dateString[1], 0, 0, 0, 0));
            }
            throw new Error('Invalid date/time pattern provided');
        }
        return date;
    };

    ns.date.set = (beginDate, finishDate, useUsDateFormat) => {
        validateParamaters(beginDate, finishDate);

        startDate = ns.date.createDate(beginDate, useUsDateFormat);
        endDate = ns.date.createDate(finishDate, useUsDateFormat);
        difference = getDifference(startDate, endDate);

        return extensions();
    };

    ns.date.setParams = (startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds) => {
        validateParamatersByUnit(startDay, startMonth, startYear, startHour, startMinute, startSeconds);
        validateParamatersByUnit(endDay, endMonth, endYear, endHour, endMinute, endSeconds);

        startDate = createDateFromParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds);
        endDate = createDateFromParams(endDay, endMonth, endYear, endHour, endMinute, endSeconds);
        difference = getDifference(startDate, endDate);

        return extensions();
    };

    ns.date.getYears = _ => {
        var diff = (endDate.getFullYear() - startDate.getFullYear());
        return (endDate.getDate() < startDate.getDate()) || (endDate.getMonth() < startDate.getMonth()) ? diff -= 1 : diff;
    };

    ns.date.getMonths = _ => {
        var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months += endDate.getMonth() - startDate.getMonth();
        return endDate.getDate() < startDate.getDate() ? months -= 1 : months;
    };

    ns.date.getWeeks = _ => ((((difference / oneDayDuration) + 0.5) << 1 ) >> 1 ) / 7 | 0;

    ns.date.getDays = (includeLastDay) => {
        if(timeSegmentPresent){
            var revisedEndDate = new Date(endDate.toDateString());
            var revisedStartDate = new Date(startDate.toDateString());
            return (((((revisedEndDate - revisedStartDate) / oneDayDuration) + 0.5) << 1) >> 1) + (includeLastDay ? 1 : 0);
        }
        return (((difference / oneDayDuration) << 1) >> 1) + (includeLastDay ? 1 : 0);
    }

    ns.date.getHours = (includeLastDay) => ((((difference / oneDayDuration) * 24) << 1) >> 1) + ((includeLastDay && !timeSegmentPresent) ? 24 : 0);
    
    ns.date.getMinutes = (includeLastDay) => (((((difference / oneDayDuration) * 24) * 60) << 1) >> 1) + ((includeLastDay && !timeSegmentPresent) ? 1440 : 0);

    ns.date.getSeconds = (includeLastDay) => ((((((difference / oneDayDuration) * 24) * 60) << 1) >> 1) * 60) + ((includeLastDay && !timeSegmentPresent) ? 86400 : 0);

    ns.date.format = (date, formatPattern, useUsDateFormat) => {
        var isInvalidDate =
            Object.prototype.toString.call(date) !== "[object String]" &&
            Object.prototype.toString.call(date) !== "[object Date]";
        if (isInvalidDate) {
            throw new Error("Parameters expected should be of type string or date");
        }

        var dateObject = date;
        if (Object.prototype.toString.call(date) === "[object String]") {
            dateObject = ns.date.createDate(date, useUsDateFormat);
            dateObject.setHours(dateObject.getHours() + (dateObject.getTimezoneOffset() / 60));
        }

        var timeSpan = createTimeSpans(dateObject);
        var i = 0;
        var result = "";
        while (i < formatPattern.length) {
            var token = ""
            var formatChar = formatPattern[i];

            while (formatPattern[i] === formatChar) {
                var pattern = formatPattern[i] + formatPattern[i+1];
                if(pattern.match(/OI/)){
                    token = "OI";
                    i+=2;
                    break;
                }

                token += formatPattern[i++];
            }

            if (timeSpan[token] != null) {
                result += timeSpan[token];
                token = "";
            } else {
                result += token;
            }
        }

        return result;
    };

})(shado);

module.exports = shado;