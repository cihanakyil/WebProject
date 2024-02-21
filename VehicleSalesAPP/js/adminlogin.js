function Yonlendir(sayfa) {
    
    if(sayfa == "giris"){
        if(document.getElementById("username").value == "admin" && document.getElementById("password").value == "admin"){
            window.location.href = "adminpanel.html";
        }
    }

    if(sayfa=="anasayfa"){
            window.location.href = "anasayfa.html";
    }
}

$(document).ready(function(){
    $("#anasayfa").click(function(){
        Yonlendir("anasayfa");
        
    })

    $("#giris").click(function(){
        Yonlendir("giris");
        
    })
})