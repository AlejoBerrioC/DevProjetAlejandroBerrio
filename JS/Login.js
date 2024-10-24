var login_username="admin";
var login_password="12345";

$(document).ready(function(){
    $("#Connecter").click(function(){
        var v1 = $("#nom").val();
        var v2 = $("#pass").val();
        if(($("#Connecter").val() == "LogIn") && (login_username == v1) && (login_password == v2)){
            parent.frames['MenuFrame'].location.href = "./Menu.html"; //Ligne pour changer le contenu de div "MenuFrame"
            $("#Connecter").val("LogOut");
            alert("Welcome to the Elden Ring Page!")
        }else if($("#Connecter").val() =="LogOut"){ 
            parent.frames['MenuFrame'].location.href = "./MenuBlanc.html";
            parent.frames['ContenuFrame'].location.href = "./Contenu.html";
            $("#Connecter").val("LogIn");
            $("#pass").val("");
            $("#nom").val("");
            alert("Merci!")
        }
        else{
            alert("Nom utilisateur ou Mot de passe invalide\nUtiliser admin et 12345");
            $("#pass").val("");
        }
    })

})
