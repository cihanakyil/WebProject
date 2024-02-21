var kategoriler = JSON.parse(localStorage.getItem("kategoriler"));
$(document).ready(function(){


    $("#aracturuekle").click(function(){
        kategoriler[0]["arac-turleri"].push(document.getElementById("arac-turu").value);
        localStorage.setItem("kategoriler",JSON.stringify(kategoriler));
    });

});