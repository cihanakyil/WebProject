function Yonlendir(sayfa){

    if(sayfa == "anasayfa"){
        window.location.href="anasayfa.html";
    }

    if(sayfa == "exit"){
        window.location.href="anasayfa.html";
    }

    
}

$(document).ready(function(){

    $("#anasayfa").click(function(){
        Yonlendir("anasayfa");
    });

    $("#exit").click(function(){
        Yonlendir("exit");
    });

    $("#profil").click(function(){
        document.getElementById("islem_cercevesi").src = "userprofil.html"
    });

    $("#ilanolustur").click(function(){
        document.getElementById("islem_cercevesi").src = "yeni_ilan.html"
    });

    $("#mevcutilan").click(function(){
        document.getElementById("islem_cercevesi").src = "mevcut_ilan.html"
    });


  });

