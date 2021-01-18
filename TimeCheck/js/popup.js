



window.onload = function () {

  document.getElementById("setUpOptions").addEventListener('click', setUpOptions);
  document.getElementById("changeSettings").addEventListener('click', setUpOptions);
  document.getElementById("tweet").addEventListener('click', tweet);


};


let usrDta = new Promise(function (resolve, reject) {
  chrome.storage.local.get(['moneySaved', 'moneySavedTtl'], function (result) {
    resolve(result);
  });
});
usrDta.then(function (usrDta) {
  var moneySavedTtl = 0;
  var moneySaved = 0;
  moneySaved = usrDta.moneySaved;
  moneySavedTtl = usrDta.moneySavedTtl;
  console.log("moneySaved" + moneySaved);
  console.log("moneySavedTtl" + moneySavedTtl);
  // moneySaved = moneySavedTtl.toFixed(2);
  moneySaved = parseFloat(moneySaved);
  console.log("moneySaved " + moneySaved);
  console.log("moneySavedTtl " + moneySavedTtl);

  if (moneySaved >= 0) {
    console.log("moneySaved " + moneySaved);
    console.log("moneySavedTtl " + moneySavedTtl);

    if (moneySavedTtl === isNaN || moneySavedTtl === "" || moneySavedTtl < 0 || moneySavedTtl === undefined) {
      ShowNoTtl();
      moneySavedTtl = 0;
    } else {

      showMain();
      alg();


    }
    console.log("moneySavedTtl " + moneySavedTtl);
    moneySavedTtl = parseFloat(moneySavedTtl);
    console.log("moneySavedTtl " + moneySavedTtl);
    // moneySavedTtl = moneySavedTtl.toFixed(2);
    // moneySavedTtl = parseFloat(moneySavedTtl);
    console.log("moneySavedTtl " + moneySavedTtl);

    moneySavedTtl = moneySaved + moneySavedTtl;
    var toComma = moneySavedTtl.toLocaleString();
    console.log(toComma);
    moneySavedTtl = moneySavedTtl.toFixed(2);


    console.log("moneySavedTtl new amount is $" + moneySavedTtl);
    document.getElementById("totalCost").innerHTML = "$" + toComma;
    chrome.storage.local.set({ ["moneySavedTtl"]: moneySavedTtl }, function () {
      console.log("congrats you saved $" + moneySavedTtl);
    });
    chrome.storage.local.set({ ["moneySaved"]: 0 }, function () {
      console.log("congrats you saved $" + moneySavedTtl);
    });
  }

  alg();

}).catch(function (reason) {
  showNovars();
  console.log("Handle rejected promise (" + reason + ") here.");
});







function setUpOptions() {
  chrome.tabs.create({ url: "../html/options.html" });
}

//---------------------------------Decide which view to display------------------------------------
function showNovars() {
  document.getElementById("noVars").classList.remove("hidden");
  document.getElementById("main").classList.add("hidden");
  document.getElementById("noTtl").classList.add("hidden");
}

function showMain() {
  document.getElementById("noVars").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("noTtl").classList.add("hidden");
}

function ShowNoTtl() {
  document.getElementById("noVars").classList.add("hidden");
  document.getElementById("main").classList.add("hidden");
  document.getElementById("noTtl").classList.remove("hidden");
}

// var savedTtl = document.getElementById("totalCost").textContent;
// console.log("savedTtl")




function tweet() {
  var savedTtl = document.getElementById("totalCost").innerText;
  //  alert("tweet2 "+document.getElementById("totalCost").innerHTML); 
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function (selection) {
    if (typeof (selection) != "undefined")
      chrome.windows.create({
        'url': 'http://twitter.com/share?text=Hey+I+just+saved+%24' + savedTtl +
          '+by+using+the+TimeCheck+chrome+extension%0D%0A%0D%0Ahttps%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Ftimecheck%2Fgpdnfadomjemliadcaiabfpadilbgmmc' +
          encodeURIComponent(selection[0]),
        'type': 'popup'
      }, function (window) { });
  });
}






function alg() {
  let ttl = new Promise(function (resolve, reject) {
    chrome.storage.sync.get('userInput', function (result) {
      console.log(result.userInput);
      resolve(result);
    });
  });
  ttl.then(function (ttl) {
    var tyh = ttl.userInput;
    var hoursInaYear = tyh.ttlHrs;
    var yearSalary = tyh.yearSal;

    if (hoursInaYear <= 0 || hoursInaYear === isNaN || hoursInaYear === "" || hoursInaYear === undefined
      || yearSalary <= 0 || yearSalary === isNaN || yearSalary === "" || yearSalary === undefined) {
      showNovars();
    }



  }).catch(function (reason) {
    showNovars();
    console.log("Handle rejected promise (" + reason + ") here.");
  });


}
let ttl = new Promise(function (resolve, reject) {
  chrome.storage.local.get(['moneySavedTtl'], function (result) {
    resolve(result);
  });
});
ttl.then(function (ttl) {
  var moneySavedTtl = ttl.moneySavedTtl;
  var counters = document.querySelectorAll('.counter');
  var speed = 10; // The lower the slower
  var count = 0;
  counters.forEach(counter => {
    var updateCount = () => {
      var target = moneySavedTtl;

      count++;

      // Lower inc to slow and higher to slow
      var inc = Math.floor(target / speed);


      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + inc;
        // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();

  });
}).catch(function (reason) {
  showNovars();
  console.log("Handle rejected promise (" + reason + ") here.");
});

