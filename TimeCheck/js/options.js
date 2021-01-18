window.onload = function () {


  // chrome.storage.sync.get(function (result) { console.log(result) });

  changeDom();
  document.getElementById("success").classList.add("hidden");
  document.getElementById("fail").classList.add("hidden");
  

  var addHours = [];
  var addMinutes = [];
  var totalHours = 0;
  var totalMinutes = 0;
  var hoursX;
  var pph;
  var yearSal;
  var ttlHrs;



  // setPreviousSave()
  document.getElementById("saveBtn").addEventListener('click', saveHandler);

  document.getElementById("radioSal").addEventListener("click", function() {
    document.getElementById("pph").value = "";
    total();
    re_compute();
    
  });
  
  document.getElementById("hrSal").addEventListener("click", function() {
    document.getElementById("salary").value = "";
    total();
    
    
  });
  
  document.getElementById("closeSuccess").addEventListener('click', closeHandler);
  document.getElementById("closeFail").addEventListener('click', closeHandler);




  function changeDom() {
    document.querySelectorAll(".radio").forEach(item => {
      item.addEventListener('change', event => {
        change(item); //changes container to say annual bi-weekly etc.... & sets a var of hoursX = total working hours in a year
        total(); //gets yearSal, ttlHrs, pph,
        re_compute(); //updates boxes to display the right amount of time worked
      });
    });


    document.querySelectorAll(".day").forEach(item => {
      item.addEventListener('change', event => {
        // change(item);
        document.getElementById("hideArrow").classList.add("hidden");
        re_compute();
      });
    });
  }



  function change(radio) {
    if (radio.checked && radio.id === "annual") {
      document.getElementById("changeText").innerHTML = "Annual";
      hoursX = 1;
    } else if (radio.checked && radio.id === "monthly") {
      document.getElementById("changeText").innerHTML = "Monthly";
      hoursX = 12;
    } else if (radio.checked && radio.id === "biweekly") {
      document.getElementById("changeText").innerHTML = "Biweekly";
      hoursX = 26;
    } else if (radio.checked && radio.id === "weekly") {
      document.getElementById("changeText").innerHTML = "Weekly";
      hoursX = 52;
    }
  }




  function closeHandler() {
    document.getElementById("success").classList.add("hidden");
    document.getElementById("fail").classList.add("hidden");
  }




  function re_compute() {

    for (let i = 1; i <= 7; i++) {

      if (document.getElementById("start" + i).value != undefined && document.getElementById("end" + i).value != undefined) {
        var hour_1 = document.getElementById("start" + i).value;
        var hour_2 = document.getElementById("end" + i).value;
        var hours = hour_2.split(':')[0] - hour_1.split(':')[0];
        var minutes = hour_2.split(':')[1] - hour_1.split(':')[1];

        if (minutes < 0 && hours > 0) {
          if (hours === 1) {
            hours = 0;
            minutes = minutes + 60;
          } else {
            hours = hours - 1;
            minutes = minutes + 60;
          }
        }

        if (hours >= 1) {
          document.getElementById("total" + i).innerHTML = hours + " Hours";
        }
        if (minutes >= 1) {
          document.getElementById("total" + i).innerHTML = minutes + " Minutes";
        }
        if (hours >= 1 && minutes >= 1) {
          document.getElementById("total" + i).innerHTML = hours + " Hours";
          document.getElementById("total" + i).innerHTML += " & " + minutes + " Minutes";
        }
        if (hours < 1 && minutes < 1) {
          document.getElementById("total" + i).innerHTML = "";
        }

        //an array that holds all the hours and min to sum up  a ttl
        addMinutes[i] = minutes;
        addHours[i] = hours;
        // remove global declarations of ttl hrs & minutes
        totalHours = 0;
        totalMinutes = 0;

        addMinutes.forEach(minFunction);
        if (totalMinutes >= 60) {
          convertMintoHr();
        }

        addHours.forEach(hrFunction);

        total();

        if (totalHours >= 0 || totalMinutes >= 0) {
          document.getElementById("grandTotal").innerHTML = "Your weekly hours worked is " + totalHours + " Hours & ";
          document.getElementById("grandTotal").innerHTML += totalMinutes + " Minutes";
        }
if (pph >= 0  && pph < Infinity) {
  document.getElementById("perHourTotal").innerHTML = "Your per hour salary is $" + pph + " Dollars Per Hour ";
  console.log("pph" + pph);
}
else if (pph === Infinity) {
  document.getElementById("perHourTotal").innerHTML = "Your per hour salary is $" + "0" + " Dollars Per Hour ";
  
} 
else{
document.getElementById("perHourTotal").innerHTML = "Please fill in paycheck information in the box to the left";
console.log("pph" + pph);
}
      }
    }
  }


  function total() {


    if (document.getElementById("pph").value >= 1) {
      //if pph has a value dont change pph???
      pph = document.getElementById("pph").value;
      ttlHrs = totalHours * 52;
      yearSal = pph * ttlHrs; 

    } else {
      //total hrs and miujtes times it by 52 = hours per year times that by annual monthly weekly yearly
      var inputSalary = document.getElementById("salary").value;
      yearSal = inputSalary * hoursX;
      ttlHrs = totalHours * 52;
      pph = Math.floor(yearSal / ttlHrs);

      
    }
  }

  function minFunction(min) {
    if (min > 0) {
      var potato = min;
      totalMinutes = totalMinutes + potato;
    }
  }

  function convertMintoHr() {
    addHours[8] = Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60;
  }

  function hrFunction(hrs) {
    if (hrs > 0) {
      var potato = hrs;
      totalHours = totalHours + potato;
    }
  }


  function saveHandler() {


    document.getElementById("success").classList.add("hidden");
    document.getElementById("fail").classList.add("hidden");

    // if (ttlHrs === 0 || ttlHrs === undefined || isNaN(pph) || pph <= 0) {
    if (ttlHrs < 1 || yearSal < 1 || totalHours < 1) {
      alert("The extension won't work properly if any of these values aren't entered!");
      document.getElementById("fail").classList.remove("hidden");
    } else {
      // salary = salary.replace(",", "");
      console.log("ttlHrs" + ttlHrs);
      console.log("yearSal" + yearSal);

      chrome.storage.sync.set(
        {
          userInput: {
            ttlHrs: ttlHrs,
            yearSal: yearSal

          }

        }, function () {
          document.getElementById("success").classList.remove("hidden");
        }
      );

    }
  }


};