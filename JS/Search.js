var namesW=new Array("SWORD","GREAT SWORD","SPEAR");
var attW=new Array("Str:16, Dex:11, Int:38","Str:20, Dex:22, Fai:20","Str:20, Dex:40");
var locW=new Array("Ranni gives to you.","Divine tower of Caelid","Leyden, royal capital");
var ubiW=new Array("../Imgs/w1.jpg","../Imgs/w2.jpg","../Imgs/w3.webp")

var namesS=new Array("MOON","STARS","RAIN");
var attS=new Array("Int:68","Int:43","Int:52");
var locS=new Array("Chelona Rise","Sellia hideaway","Heretical rise");
var ubiS=new Array("../Imgs/s1.jpg","../Imgs/s2.jpg","../Imgs/s3.jpg")

$(document).ready(function(){
    $("#information,imgW,imgS").hide();
    $("#weaponB").click(function(){
        let name=$("#weaponT").val().trim().toUpperCase();

        for(let i=0;i<namesW.length;i++){
            if(namesW[i].toUpperCase()==name){
                $("#nameW").text(namesW[i]);
                $("#attW").text(attW[i]);
                $("#locW").text(locW[i]);
                $("#imgW").attr("src", ubiW[i]);
                $("#imgW").show();               
            }
        }
    })

    $("#spellB").click(function(){
        let name=$("#spellT").val().trim().toUpperCase();

        for(let i=0;i<namesS.length;i++){
            if(namesS[i].toUpperCase()==name){
                $("#nameS").text(namesS[i]);
                $("#attS").text(attS[i]);
                $("#locS").text(locS[i]);
                $("#imgS").attr("src", ubiS[i]);
                $("#imgS").show();               
            }
        }
    })

})




