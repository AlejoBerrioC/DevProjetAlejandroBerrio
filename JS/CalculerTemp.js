var date1, date2;

function Temp(){
    date1=new Date();
}

function Temp2(){
    date2=new Date()
    var resultat1= date2.getTime() - date1.getTime();
    var resultat2= new Date(resultat1);
    alert("Le temp d'attendre est: " + resultat2.getSeconds() + " seconde(s)");   
}