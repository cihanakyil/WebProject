
$(document).ready(function(){
    $("#home").click(function(){
        window.location.href ="anasayfa.html";
    })

    $("#exit").click(function(){
        window.location.href ="adminlogin.html";
    })

    $("#bekleyen_ilanlar").click(function(){
        $('#Iframe1').attr('src', "bekleyen_ilanlar.html")
    })

    $("#kategori_islem").click(function(){
        $('#Iframe1').attr('src', "kategoriislem.html")
    })
})