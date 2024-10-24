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

function f2(){
  var tot2 = parseFloat(getCookie("ctot2"));
  var totalA2 = parseFloat(getCookie("ctotalA"));
  if(isNaN(totalA2)==false){
    document.getElementById("totalBTaxes").innerHTML = tot2.toFixed(2);
    document.getElementById("totalATaxes").innerHTML = totalA2.toFixed(2);
    document.getElementById("Taxes").innerHTML = (totalA2 - tot2).toFixed(2);
  }
}


function payValid(){
  var regex1= /^\d{16}$/;
  var regex2= /^\d{2}$/;
  var regex3= /^\d{4}$/;
  var regex4= /^\d{3}$/;
  if(regex1.test(document.getElementById("cardNumber").value)==false){
    alert("Wrong card number, please enter a number 16 digits");
  }else if(regex2.test(document.getElementById("month").value)==false){
    alert("Wrong month, please enter a number with 2 digits");
  }else if(regex3.test(document.getElementById("year").value)==false){
    alert("Wrong year, please enter a number with 4 digits");
  }else if(regex4.test(document.getElementById("securNumber").value)==false){
    alert("Wrong secur number, please enter a number with 3 digits");
  }
  else{
    alert("Thanks for your purchase!");
  }
}
