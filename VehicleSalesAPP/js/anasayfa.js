function Yonlendir(sayfa){

    if(sayfa == "adminLogin"){
        window.location.href="adminlogin.html";
    }

    if(sayfa == "userLogin"){
        window.location.href="userlogin.html";
    }

    if(sayfa == "register"){
        window.location.href="register.html";
    }

   
}


$(document).ready(function(){

    $("#adminLogin").click(function(){
        Yonlendir("adminLogin");
    });

    $("#userLogin").click(function(){
        Yonlendir("userLogin");
    });


    $("#register").click(function(){
        Yonlendir("register");
    });


  });

