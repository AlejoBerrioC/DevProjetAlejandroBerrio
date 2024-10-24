var weaponName = new Array(
  "None",
  "GraftedBlade",
  "StarsCourage",
  "Moonveil",
  "MeteoricOre",
  "BlackKnife"
);
var weaponID = new Array("", "WPN01", "WPN02", "WPN03", "WPN04", "WPN05");
var weaponImage = new Array(
  "",
  "../Imgs/ER_Icon_weapon_Grafted_Blade_Greatsword.webp",
  "../Imgs/ER_Icon_weapon_Starscourge_Greatsword.webp",
  "../Imgs/ER_Icon_weapon_Moonveil.webp",
  "../Imgs/ER_Icon_weapon_Meteoric_Ore_Blade.webp",
  "../Imgs/ER_Icon_weapon_Black_Knife.webp"
);
var weaponPrix = new Array(0.0, 20, 51.5, 45, 40.5, 35);
var weaponDesc = new Array(
  "",
  "Grafted Blade Greatsword is a Colossal Sword in Elden Ring. The Grafted Blade Greatsword scales primarily with Strength, with minor scaling in Dexterity.",
  "Starscourge Greatsword is a Colossal Sword in Elden Ring. The Starscourge Greatsword scales primarily with Intelligence, Strength, and Dexterity and is a good Weapon for pulling in enemies using its unique skill, Starcaller Cry.",
  "Moonveil is a Katana in Elden Ring. The Moonveil scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for dealing melee Slash and Pierce Damage in Combat.",
  "Meteoric Ore Blade is a Katana in Elden Ring. The Meteoric Ore Blade scales primarily with Strength, Dexterity and Intelligence and is a good Weapon for dealing melee Slash and Pierce damage in combat.",
  "Black Knife is a Dagger in Elden Ring. The Black Knife scales primarily with Faith and Dexterity and is a good Weapon for dealing additional Holy Damage and for its Unique Skill, Blade of Death, that allows the user to fire an additional projectile."
);

$(document).ready(function () {
  $("#WeaponsOptions").change(function () {
    let name = $("#WeaponsOptions").val();
    for (let i = 0; i < weaponName.length; i++) {
      if (weaponName[i] == name) {
        $("#ProdID").val(weaponID[i]);
        $("#ImagePrin").attr("src", weaponImage[i]);
        $("#PrixST").text(weaponPrix[i]);
        $("#DescriptionProduit").val(weaponDesc[i]);
        $("#Quantite").val("");
      }
    }
  }); //Cette fonction pour changer le contenu du form chaque fois que l'utilisateur selectionné une item different dans le select de nom

  $("#btnAdd").click(function () {
    let id = $("#ProdID").val();
    let quantite = parseFloat($("#Quantite").val());
    if(quantite>=1){
      switch (id) {
        case "WPN01":
          $("#QWP1").text(quantite);
          $("#PRWP1").text(weaponPrix[1] * quantite);
          break;
        case "WPN02":
          $("#QWP2").text(quantite);
          $("#PRWP2").text(weaponPrix[2] * quantite);
          break;
        case "WPN03":
          $("#QWP3").text(quantite);
          $("#PRWP3").text(weaponPrix[3] * quantite);
          break;
        case "WPN04":
          $("#QWP4").text(quantite);
          $("#PRWP4").text(weaponPrix[4] * quantite);
          break;
        case "WPN05":
          $("#QWP5").text(quantite);
          $("#PRWP5").text(weaponPrix[5] * quantite);
          break;
      }
    }else{
      alert("Please entry a quantity");
    }
    
    let total =
      parseFloat($("#PRWP1").text()) +
      parseFloat($("#PRWP2").text()) +
      parseFloat($("#PRWP3").text()) +
      parseFloat($("#PRWP4").text()) +
      parseFloat($("#PRWP5").text());
    $("#TotalST").text(total);
  });
});

//Section de Fonctions pour les cookies
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

function delCookie(cname) {
  var user = getCookie(cname);
  if (user == "") {
    alert("Cookie username doesn’t exist ");
  } else {
    if (user != "" && user != null) {
      setCookie(cname, "", -3);
      alert("Cookie deleted.");
    }
  }
}
//End section de fonctions pour les cookies

function purchase() {
  var tot = parseFloat(document.getElementById("TotalST").innerHTML);
  setCookie("ctot", tot, 1);
  var cwp1 = parseFloat(document.getElementById("PRWP1").innerHTML);
  setCookie("cprw1", cwp1, 1);
  var cwp2 = parseFloat(document.getElementById("PRWP2").innerHTML);
  setCookie("cprw2", cwp2, 1);
  var cwp3 = parseFloat(document.getElementById("PRWP3").innerHTML);
  setCookie("cprw3", cwp3, 1);
  var cwp4 = parseFloat(document.getElementById("PRWP4").innerHTML);
  setCookie("cprw4", cwp4, 1);
  var cwp5 = parseFloat(document.getElementById("PRWP5").innerHTML);
  setCookie("cprw5", cwp5, 1);
  parent.frames['ContenuFrame'].location.href ="../Pages/Page6.html";
}


function deletePurchase(){
  if(document.getElementById("TotalST").innerHTML!="0"){
    ["PRWP1","PRWP2","PRWP3","PRWP4","PRWP5"].forEach(function(id){
      document.getElementById(id).innerHTML="0";
    })
    document.getElementById("TotalST").innerHTML="0";
    ["QWP1","QWP2","QWP3","QWP4","QWP5"].forEach(function(id2){
      document.getElementById(id2).innerHTML="0";
    })
    alert("Purchase Removed");
  } else{
    alert("Please select items to buy");
  } 
}

