


window.onload = function () {
  run();
};

document.addEventListener("click", clicked);
document.addEventListener("mousemove", moveMouse);

function clicked(){
  run();
  document.addEventListener("mousemove", moveMouse);
}

function moveMouse(){
  run();
  document.removeEventListener("mousemove", moveMouse);
}



function run() {

  var total = "";
  var moneyContainer = "";
  var backgroundColor = "";



  if (document.URL.match("https://www.amazon.com/gp/cart/")) {
    total = "#sc-subtotal-label-buybox";
    moneyContainer = "#sc-subtotal-amount-buybox .a-size-medium.a-color-base.sc-price.sc-white-space-nowrap";
  } else if (document.URL.match("https://www.amazon.com/gp/buy/")) {
    total = ".a-color-price.a-size-medium.a-text-bold:first-child span";
    moneyContainer = ".a-color-price.a-size-medium.a-text-right.grand-total-price.aok-nowrap.a-text-bold.a-nowrap";
  } else if (document.URL.match("https://cart.ebay.com/")) {
    total = ".total-row:first-child span span span";
    moneyContainer = ".val-col.total-row span span span";
  } else if (document.URL.match("https://pay.ebay.com")) {
    total = "tr:last-child .label:first-child span";
    moneyContainer = "tr:last-child .text-display span";
 }  else if (document.URL.match("https://cart.payments.ebay.com")) {
  total = ".total-row:first-child span span span";
  moneyContainer = ".val-col.total-row span span span";
}
  else if (document.URL.match(/^https:\/\/www\.etsy\.com\/cart\/\d+\/review/)) {
    total = ".wt-text-body-01.wt-line-height-tight.order-cost-summary.wt-position-relative:nth-child(16) .wt-table__row__cell.wt-pt-xs-2.wt-pb-xs-3.wt-pb-lg-1:first-child";
    moneyContainer = ".wt-text-body-01.wt-line-height-tight.order-cost-summary.wt-position-relative:nth-child(16) .order-total-cost.wt-rounded .currency-value:last-child";
  } else if (document.URL.match("https://www.etsy.com/cart")) {
    total = ".wt-p-xs-0.wt-b-xs-none .wt-text-title-01";
    moneyContainer = ".wt-p-xs-0.wt-b-xs-none.wt-text-right-xs.wt-no-wrap .wt-text-title-01 .currency-value:last-child";
  } else if (document.URL.match("https://www.walmart.com/cart")) {
    total = "html>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(4)>:nth-child(2)>:nth-child(1)>:nth-child(2)";
    moneyContainer = "html>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(4)>:nth-child(2)>:nth-child(2)";
  }else if (document.URL.match("https://www.walmart.com/checkout")) {
    total = "span.order-summary-label";
    moneyContainer = "span.Discount.order-summary-price.text-right";
  } else if (document.URL.match("https://www.overstock.com/cart")) {
    total = "html>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(7)>:nth-child(1)";
    moneyContainer = "html>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(7)>:nth-child(2)";
  } else if (document.URL.match("https://www.overstock.com/checkout")) {
    total = "html>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(1)";
    moneyContainer = "html>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(2)";
  }else if (document.URL.match("https://www.bestbuy.com/cart")) {
    total = "div.price-summary__total-description";
    moneyContainer = "div.price-summary__total-value";
  } else if (document.URL.match("https://www.bestbuy.com/checkout")) {
    total = ".order-summary__total .order-summary__label:first-child span";
    moneyContainer = ".order-summary__total .cash-money";
  } else if (document.URL.match("https://www.kohls.com/checkout")) {
    total = "#checkoutreview label .order_bldtxt";
    moneyContainer = "#checkoutreview #totalcharges";
  } else if (document.URL.match("https://shoppingcart.aliexpress.com")) {
    total = ".total-price dt";
    moneyContainer = ".total-price dd";
  } else if (document.URL.match("https://store.ferrari.com/us/OnePageCheckout")) {
    total = ".prices.total-price .label:first-child";
    moneyContainer = ".prices.total-price .value:last-child";
  } else if (document.URL.match("https://www.apple.com/shop/bag")) {
    total = ".rs-summary-labelandvaluecontainer.rs-summary-total .rs-summary-label:first-child";
    moneyContainer = ".rs-summary-labelandvaluecontainer.rs-summary-total .rs-summary-value:last-child";
  } else if (document.URL.match("https://secure4.store.apple.com/shop/checkout*")) {
    total = "div.rs-summary-label";
    moneyContainer = "div.rs-summary-value";
  } else if (document.URL.match("https://www.macys.com/my-bag")) {
    total = "#cx-GRAND_TOTAL .small-8.cell:first-child";
    moneyContainer = "#cx-GRAND_TOTAL .small-4.cell:last-child";
  } else if (document.URL.match("https://www.ulta.com/bag")) {
    total = ".OrderSummaryRow__label:first-child .Text.Text--body-2.Text--left.Text--bold.Text--small";
    moneyContainer = ".Text.Text--body-2.Text--right.Text--bold.Text--small";
  } else if (document.URL.match("https://www.ulta.com/checkout")) {
    total = ".Text.Text--body-2.Text--left.Text--bold.Text--small";
    moneyContainer = ".Text.Text--body-2.Text--right.Text--bold.Text--small";
  } else if (document.URL.match("https://www.sephora.com/basket")) {
    total = ".css-1mp6m72.eanm77i0 span";
    moneyContainer = ".css-7kq152.eanm77i0";
  } else if (document.URL.match("https://www.sephora.com/checkout")) {
    total = ".css-80alb.eanm77i0 .css-6pffs4.eanm77i0:first-child";
    moneyContainer = ".css-8wdtw8.eanm77i0";
  } else if (document.URL.match("https://www.wayfair.com/v/checkout/basket")) {
    total = ".BasketStickyContainer-content .OrderSummaryTable-row.OrderSummaryTable-total:nth-child(5) .OrderSummaryTable-cell.OrderSummaryTable-cell--left:first-child";
    moneyContainer = ".BasketStickyContainer-content .OrderSummaryTable-row.OrderSummaryTable-total:nth-child(5) .OrderSummaryTable-cell.OrderSummaryTable-cell--right:last-child";
  } else if (document.URL.match("https://secure.wayfair.com/v/checkout")) {
    total = ".OrderSummaryTable-row.OrderSummaryTable-total .OrderSummaryTable-cell.OrderSummaryTable-cell--left:first-child";
    moneyContainer = ".OrderSummaryTable-row.OrderSummaryTable-total .OrderSummaryTable-cell.OrderSummaryTable-cell--right:last-child";
  } else if (document.URL.match("https://www.nike.com/cart")) {
    total = ".css-5jnuvr.e181ly3q5";
    moneyContainer = ".css-1lavku9.e181ly3q6";
  } else if (document.URL.match("https://www.nike.com/checkout")) {
    total = ".fs16-sm.ncss-brand.totalText";
    moneyContainer = ".fs16-sm.ncss-brand.text-color-accent.total";
  } else if (document.URL.match("https://www.costco.com/Checkout")) {
    total = ".h6-style-guide.summary-left.estimated-total-label:first-child";
    moneyContainer = "#order-estimated-total";
  } else if (document.URL.match("https://www.costco.com/SinglePageCheckoutView")) {
    total = ".h6-style-guide.summary-left";
    moneyContainer = ".h6-style-guide.summary-right.surchargeOrderTotal";
  }

  if (total === "") {
    return;
  }






  var url = window.location.href;
  var hoursInaYear;
  var yearSalary;
  var yr = "";
  var mo = "";
  var wk = "";
  var dy = "";
  var hr = "";
  var mn = "";
  var sc = "";
  var hoursWorkedText = "";
  var orderTotal;
  var orderSeconds;



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function findAndReplace() {
    console.log("ran this function -1");
    hoursWorkedText = "Your order total = " + yr + mo + wk + dy + hr + mn + sc + " of work";

    document.querySelector(total).innerText = hoursWorkedText;
    document.querySelector(total).style.backgroundColor = backgroundColor;

  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function orderTtl() {

    var myClasses = document.querySelectorAll(moneyContainer);

    
    orderTotal = myClasses[0].innerText;

    if (orderTotal === undefined) {
      return;
    }
  
    orderTotal = orderTotal.replace('$', "");
    orderTotal = orderTotal.replace(',', "");
    orderTotal = orderTotal.replace('US', "");
    // alert(orderTotal);
    // orderTotal = parseFloat(finalVal(/,/g, '')); //changes order amount text to a flaot
    console.log("orderTotal " + orderTotal);




    let usrDta = new Promise(function (resolve, reject) {
      chrome.storage.local.get([url], function (result) {
        resolve(result);
      });
    });

    usrDta.then(function (usrDta) {
      console.log(usrDta[url]);
      var prevCart = 0;
      var moneySaved = 0;
      prevCart = usrDta[url];
      prevCart = parseFloat(prevCart);
      orderTotal = parseFloat(orderTotal);
      if (prevCart > orderTotal) {
        moneySaved = prevCart - orderTotal;
      }
      chrome.storage.local.set({ ["moneySaved"]: moneySaved }, function () {
        console.log("congrats you saved $" + moneySaved);
      });
    })
      .catch(function (reason) {
        console.log("Handle rejected promise (" + reason + ") here.");
      });




    chrome.storage.local.set({ [url]: orderTotal }, function () {
      console.log('shopping cart saved in storage of $' + orderTotal);
    });



  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function alg() {
    let ttl = new Promise(function (resolve, reject) {
      chrome.storage.sync.get('userInput', function (result) {
        console.log(result.userInput);
        resolve(result);
      });
    });
    ttl.then(function (ttl) {
      var tyh = ttl.userInput;
      hoursInaYear = tyh.ttlHrs;
      yearSalary = tyh.yearSal;
      var hoursInaMonth = hoursInaYear / 12;
      var hoursInaWeek = hoursInaYear / 52;
      var hoursInaDay = hoursInaYear / 365;
      var secondsinaMinute = 60;
      var secondsInAHour = 3600;
      var secondsInaDay = hoursInaDay * 3600;
      var secondsInaWeek = hoursInaWeek * 3600;
      var secondsInaMonth = hoursInaMonth * 3600;
      var secondsinaYear = hoursInaYear * 3600;
      console.log("yearSalary " + yearSalary);
      var secondsToDollar = secondsinaYear / yearSalary;


      orderSeconds = orderTotal * secondsToDollar;
      var year = Math.floor(orderSeconds / secondsinaYear);

      var remainder = (orderSeconds % secondsinaYear);

      var Month = Math.floor(remainder / secondsInaMonth);
      remainder = (remainder % secondsInaMonth);

      var Week = Math.floor(remainder / secondsInaWeek);
      remainder = (remainder % secondsInaWeek);

      var day = Math.floor(remainder / secondsInaDay);
      remainder = (remainder % secondsInaDay);

      var hour = Math.floor(remainder / secondsInAHour);
      remainder = (remainder % secondsInAHour);

      var minute = Math.floor(remainder / secondsinaMinute);
      remainder = (remainder % secondsinaMinute);

      var seconds = Math.floor(remainder);



      if (year === 1) {
        yr = year + " Year ";
        if (backgroundColor === "") {
          backgroundColor = "red";
        }
      } if (year >= 2) {
        yr = year + " Years";
        if (backgroundColor === "") {
          backgroundColor = "red";
        }
      } if (Month === 1) {
        mo = Month + " Month ";
        if (backgroundColor === "") {
          backgroundColor = "crimson";
        }
      } if (Month >= 2) {
        mo = Month + " Months ";
        if (backgroundColor === "") {
          backgroundColor = "crimson";
        }
      } if (Week === 1) {
        wk = Week + " Week ";
        if (backgroundColor === "") {
          backgroundColor = "orange";
        }
      } if (Week >= 2) {
        wk = Week + " Weeks ";
        if (backgroundColor === "") {
          backgroundColor = "orange";
        }
      } if (day === 1) {
        dy = day + " Day ";
        if (backgroundColor === "") {
          backgroundColor = "yellow";
        }
      } if (day >= 2) {
        dy = day + " Days ";
        if (backgroundColor === "") {
          backgroundColor = "yellow";
        }
      } if (hour === 1) {
        hr = hour + " Hour ";
        if (backgroundColor === "") {
          backgroundColor = "lightgreen";
        }
      } if (hour >= 2) {
        hr = hour + " Hours ";
        if (backgroundColor === "") {
          backgroundColor = "lightgreen";
        }
      } if (minute === 1) {
        mn = minute + " Minute ";
        if (backgroundColor === "") {
          backgroundColor = "palegreen";
        }
      } if (minute >= 2) {
        mn = minute + " Minutes ";
        if (backgroundColor === "") {
          backgroundColor = "palegreen";
        }
      } if (seconds === 1) {
        sc = "& " + seconds + " Second";
        if (backgroundColor === "") {
          backgroundColor = "palegreen";
        }
      } if (seconds >= 2) {
        sc = "& " + seconds + " Seconds";
        if (backgroundColor === "") {
          backgroundColor = "palegreen";
        }
      }

      findAndReplace();



    }).catch(function (reason) {
      console.log("Handle rejected promise (" + reason + ") here.");
    });
  }

  alg();
  orderTtl();

}



