// import moment from "moment";
// import emoji from "emojis-list";
import $ from "jquery";
import shado from "shado";
import timestamp from "time-stamp";
import { FancyTimer, IFancyTimerOptions } from 'fancy-timer';
import tempVar from "after-before-date";
import converter from 'number-to-words';
import addTime from "add-time";
import cal from'generate-calendar-url';




var chosenDate = $("#datePicker");
var chosenTime = $("#timePicker");










const one = 1;
const ten = one * 10;
const hundred = ten * 10;
const thousand = hundred * 10;
const tenThousand = thousand * 10;
const hundredThousand = tenThousand * 10;
const million = hundredThousand * 10;
const tenMillion = million * 10;
const hundredMillion = tenMillion * 10;
const billion = hundredMillion * 10;
const tenBillion = billion * 10;



const secondsInAYear = 31556952;
const secondsInAMonth = 2629746;
const secondsInAWeek = 604800;
const secondsInADay = 86400;
const secondsInAHour = 3600;

var specialEvent = "";




var timeSpan = [one, ten, hundred, thousand, tenThousand, hundredThousand, million, tenMillion, hundredMillion, billion, tenBillion,];
var yearSpan = [];

for (var i = 1; i <= 100; i++) {
  yearSpan.push(i);
}


var containerNumber = 0;
var textDivNumber = 0;
var conversion;

document.getElementById("birthday").addEventListener("click", function () {
  specialEvent = "Date of Birth";
});
document.getElementById("anniversary").addEventListener("click", function () {
  specialEvent = "your anniversary ";
});

document.getElementById("other").addEventListener("click", function () {
  specialEvent = $('#otherTxt').val();
});


$("#birthday").add("#anniversary").add("#other").click(function () {

  var div = document.getElementById('textMain');

  div.innerHTML += 'Since picked date';

  var startDate = new Date(chosenDate.val());
  var startDateX = new Date(chosenDate.val());

  var endDate = new Date(timestamp('MM/DD/YYYY'));
  chosenTime = chosenTime.val()
  
  var chosenTimeSplit = chosenTime.split(':');
  console.log(chosenTimeSplit);

  var startdateMin = addTime(startDateX, {
    hours: chosenTimeSplit[0],
    minutes: chosenTimeSplit[1],

  });

  var enddateMin = addTime(endDate, {
    hours: chosenTimeSplit[0],
    minutes: chosenTimeSplit[1],

  });
  console.log(startDate)
  console.log(startdateMin)

  console.log(endDate)
  console.log(enddateMin)
  console.log(chosenTime)




  

  var years = shado.date.set(startDate, endDate).getYears();
  var months = shado.date.set(startDate, endDate).getMonths();
  var weeks = shado.date.set(startDate, endDate).getWeeks();
  var days = shado.date.set(startDate, endDate).getDays(false);
  var hours = shado.date.set(startDate, endDate).getHours(false);
  var minutes = shado.date.set(startDate, endDate).getMinutes(false);
  var seconds = shado.date.set(startDate, endDate).getSeconds(false);


  document.getElementById('containerMain');

  var main = new FancyTimer(

    document.getElementById('containerMain'),
    {
      // value: new Date(startDate),
      value: new Date(startDate),
      captions: {
        years: 'years',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
      },

      showDays: 6,
      reverseAnimation: true,
      warn: {
        secondsLeft: 60
      },
      onWarning: function () {
        console.log('WARNING!');
      }

    }
  );

  main.start(+1);



  //////////////////////////////////////////////////////////////////

  function secondsConverter(second) {



    second = second - secondsFrom;



    var test = new FancyTimer(

      document.getElementById('container' + containerNumber),
      {
        value: second,
        captions: {
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: '& Seconds'
        },
        showDays: 6,

      }
    );

    test.start(-1);
  }
  // }
  //////////////////////////////////////////////////////////////////

  function textDiv(conversion) {
    textDivNumber++;
    var ele = document.getElementById('text' + textDivNumber);
    var dte = document.getElementById('date' + textDivNumber);
    
    

    if (conversion % secondsInAYear === 0) {
      ele.innerHTML += converter.toWords((conversion / secondsInAYear)) + " years from your " + specialEvent + " is";
      dte.innerHTML += " which will be on " + addTime(startDate, { seconds: conversion, });
      return;
    }
    if (conversion % secondsInAMonth === 0) {

      ele.innerHTML += converter.toWords((conversion / secondsInAMonth)) + " months from your " + specialEvent + " is";
      dte.innerHTML += " which will be on " + addTime(startDate, { seconds: conversion, });
      return;
    }
    if (conversion % secondsInAWeek === 0) {

      ele.innerHTML += converter.toWords((conversion / secondsInAWeek)) + " weeks from your " + specialEvent + " is";
      dte.innerHTML += " which will be on " + addTime(startDate, { seconds: conversion, });
      return;
    }
    if (conversion % secondsInADay === 0) {

      ele.innerHTML += converter.toWords((conversion / secondsInADay)) + " days from your " + specialEvent + " is";
      dte.innerHTML += " which will be on " + addTime(startDate, { seconds: conversion, });

      return;
    }
    if (conversion % secondsInAHour === 0) {

      ele.innerHTML += converter.toWords((conversion / secondsInAHour)) + " hours from your " + specialEvent + " is";
      dte.innerHTML += " which will be on " + addTime(startDate, { seconds: conversion, });
      return;
    }
    if (conversion % 60 === 0) {

      ele.innerHTML += converter.toWords((conversion / 60)) + " min from your " + specialEvent + " is";
      dte.innerHTML += " which will be on " + addTime(startDate, { seconds: conversion, });
      return;
    }
    else {

      ele.innerHTML += converter.toWords((conversion)) + " sec from your " + specialEvent + " is";
      dte.innerHTML += " which will be on " + addTime(startDate, { seconds: conversion, });

    }
    



    
  }



  //////////////////////////////////////////////////////////////////

  var newConvertArray = [];
  var secondsFrom = shado.date.set(startDate, endDate).getSeconds();

  //seconds
  timeSpan.forEach(element => {

    if (element < tenBillion + 1 && element - seconds > 0) {

      newConvertArray.push(element);
    }
  });

  //minutes
  timeSpan.forEach(element => {

    if (element < billion + 1 && element - minutes > 0) {

      newConvertArray.push(element * 60);
    }
  });

  //hours
  timeSpan.forEach(element => {

    if (element < tenMillion + 1 && element - hours > 0) {

      newConvertArray.push(element * secondsInAHour);
    }
  });


  //days
  timeSpan.forEach(element => {

    if (element < 1000001 && element - days > 0) {

      newConvertArray.push(element * secondsInADay);
    }
  });

  //weeks
  timeSpan.forEach(element => {

    if (element < hundredThousand + 1 && element - weeks > 0) {

      newConvertArray.push(element * secondsInAWeek);
    }
  });

  //months
  timeSpan.forEach(element => {

    if (element < tenThousand + 1 && element - months > 0) {

      newConvertArray.push(element * secondsInAMonth);
    }
  });



  //years
  yearSpan.forEach(element => {

    if (element < thousand + 1 && element - years > 0) {

      newConvertArray.push(element * secondsInAYear);
    }
  });






  newConvertArray.sort(function (a, b) { return a - b; });






  newConvertArray.forEach(element => {
    conversion = element;
    textDiv(conversion);

    containerNumber++;
    var btn = ('button' + textDivNumber);
    console.log(btn)
    var res = $('#text' + textDivNumber).text();
    
    var event = {
      title: res + " today!",
      start: addTime(startDate, { seconds: conversion, }),
      end: addTime(startDate, { seconds: conversion, }),
      description: 'Congrats today marks' + res
    };
     
    console.log(cal.google(event));

    document.getElementById(btn).classList.remove("hidden");

    document.getElementById(btn).addEventListener("click", function() {
      window.open(cal.google(event), "_blank");
    });

    secondsConverter(element);
  });




});


























