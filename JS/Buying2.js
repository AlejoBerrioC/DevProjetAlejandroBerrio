var weaponName = new Array(
  "Grafted Blade",
  "Stars Courage",
  "Moonveil",
  "Meteoric Ore",
  "Black Knife"
);

var totalA;

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exsec) {
  var d = new Date();
  d.setTime(d.getTime() + exsec * 60 * 1000); //
  var expires = "expires=" + d.toUTCString();
  document.cookie = "   " + cname + "=" + cvalue + "; " + expires;
  // alert(
  //   "cookie: " +
  //     cname +
  //     " value: " +
  //     cvalue +
  //     " was set for: " +
  //     exsec * 60 +
  //     " sec."
  // );
}

function f1() {
  let arrayCookies = new Array("cprw1", "cprw2", "cprw3", "cprw4", "cprw5");
  for (let i = 0; i < arrayCookies.length; i++) {
    let cwp = getCookie(arrayCookies[i]);
    if (cwp != 0) {
      var myTable = document.getElementById("billTable");
      let row = myTable.insertRow(2);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = weaponName[i];
      cell2.innerHTML = parseFloat(cwp).toFixed(2);
    }
  }

  var tot = parseFloat(getCookie("ctot"));
  if(isNaN(tot)==false){
    document.getElementById("TotalBTaxes").innerHTML = tot.toFixed(2);
    var GST = tot * 0.05;
    document.getElementById("totGST").innerHTML = GST.toFixed(2);
    var QST = tot * 0.09975;
    document.getElementById("totQST").innerHTML = QST.toFixed(2);
    totalA = tot + GST + QST;
    document.getElementById("TotalATaxes").innerHTML = totalA.toFixed(2);
  }
}


function paysection(){
  var tot2 = parseFloat(document.getElementById("TotalBTaxes").innerHTML);
  var totalA2 = parseFloat(document.getElementById("TotalATaxes").innerHTML);
  setCookie("ctot2",tot2,1);
  setCookie("ctotalA",totalA2,1);
  parent.frames['ContenuFrame'].location.href ="../Pages/Page7.html";
}


function displayMoney(getAmount) {
  var amount = getAmount; // .toFixed(2) ;
  document.getElementById("display").innerHTML = amount;
  //alert("100$="+amount);
  var val100 = parseInt(amount / 100);
  if (val100 > 0) {
    document.getElementById("bn100").src = "../Imgs/img$/100$.jpg";
  } else {
    document.getElementById("bn100").src = "";
  }
  document.getElementById("hun").innerHTML = val100; //Math.floor(val100);
  document.getElementById("totalHun").innerHTML = "$" + val100 * 100; //(Math.floor(val100)*100);

  amount = (amount - val100 * 100).toFixed(2);
  //alert("50$=amount = "+amount);
  var val50 = parseInt(amount / 50);
  if (val50 > 0) {
    document.getElementById("bn50").src = "../Imgs/img$/50$.jpg";
  } else {
    document.getElementById("bn50").src = "";
  }
  document.getElementById("fifty").innerHTML = val50;
  document.getElementById("totalFifty").innerHTML = "$" + val50 * 50;

  amount = (amount - val50 * 50).toFixed(2);

  //alert("20$="+amount);
  var val20 = parseInt(amount / 20);
  if (val20 > 0) {
    document.getElementById("bn20").src = "../Imgs/img$/20$.jpg";
  } else {
    document.getElementById("bn20").src = "";
  }
  document.getElementById("twenty").innerHTML = val20;
  document.getElementById("totalTwenty").innerHTML = "$" + val20 * 20;

  amount = (amount - val20 * 20).toFixed(2);
  //alert("10$="+amount);
  var val10 = parseInt(amount / 10);
  if (val10 > 0) {
    document.getElementById("bn10").src = "../Imgs/img$/10$.jpg";
  } else {
    document.getElementById("bn10").src = "";
  }
  document.getElementById("ten").innerHTML = val10;
  document.getElementById("totalTen").innerHTML = "$" + val10 * 10;

  var amount = (amount - val10 * 10).toFixed(2);
  //alert("5$ amount="+amount);
  var val05 = parseInt(amount / 5);
  if (val05 > 0) {
    document.getElementById("bn05").src = "../Imgs/img$/5$.jpg";
  } else {
    document.getElementById("bn05").src = "";
  }
  document.getElementById("five").innerHTML = Math.floor(val05);
  document.getElementById("totalFive").innerHTML = "$" + Math.floor(val05) * 5;

  var amount = (amount - val05 * 5).toFixed(2);

  var val02 = parseInt(amount / 2);
  if (val02 > 0) {
    document.getElementById("bn02").src = "../Imgs/img$/2$.jpg";
  } else {
    document.getElementById("bn02").src = "";
  }
  document.getElementById("toon").innerHTML = Math.floor(val02);
  document.getElementById("totalToon").innerHTML = "$" + Math.floor(val02) * 2;

  var amount = (amount - val02 * 2).toFixed(2);

  var val01 = parseInt(amount / 1);
  if (val01 > 0) {
    document.getElementById("bn01").src = "../Imgs/img$/1$.jpg";
  } else {
    document.getElementById("bn01").src = "";
  }
  document.getElementById("one").innerHTML = Math.floor(val01);
  document.getElementById("totalOne").innerHTML = "$" + Math.floor(val01) * 1;

  var amount = (amount - val01 * 1).toFixed(2);

  var val25 = parseInt(amount / 0.25);
  if (val25 > 0) {
    document.getElementById("bn25").src = "../Imgs/img$/25c.jpg";
  } else {
    document.getElementById("bn25").src = "";
  }
  document.getElementById("quarter").innerHTML = val25;
  document.getElementById("totalQuarter").innerHTML = "$" + val25 * 0.25;

  var amount = (amount - val25 * 0.25).toFixed(2);

  var val010 = parseInt(amount / 0.1);
  if (val010 > 0) {
    document.getElementById("bn10c").src = "../Imgs/img$/10c.jpg";
  } else {
    document.getElementById("bn10c").src = "";
  }
  document.getElementById("dime").innerHTML = val010;
  document.getElementById("totalDime").innerHTML = "$" + val010 * 0.1;

  amount = (amount - val010 * 0.1).toFixed(2);

  val005 = parseInt(amount / 0.05);
  if (val005 > 0) {
    document.getElementById("bn5c").src = "../Imgs/img$/5c.jpg";
  }
  //else
  //{document.getElementById("bn5c").src = "img/none.JPG";}
  amount = (amount - val005 * 0.05).toFixed(2);
  if (amount == 0.03 || amount == 0.04) {
    document.getElementById("nickel").innerHTML = val005 + 1;
    document.getElementById("bn5c").src = "../Imgs/img$/5c.jpg";
    document.getElementById("totalNickel").innerHTML = "$" + val005 * 0.05;
  } else {
    document.getElementById("nickel").innerHTML = val005;
    document.getElementById("totalNickel").innerHTML = "$" + val005 * 0.05;
  }
}
