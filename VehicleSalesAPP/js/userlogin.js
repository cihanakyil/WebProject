function Yonlendir(sayfa){

    if(sayfa == "kayit"){
        window.location.href="register.html";
    }
    else if(sayfa == "anasayfa"){
        window.location.href="anasayfa.html";
    }
    else if(sayfa == "userpanel"){
        window.location.href="userpanel.html";
    }

}

var username,password ;

function Login() {

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    var kullanicilar = localStorage.getItem("kullanicilar");
    kullanicilar = JSON.parse(kullanicilar);
    var control = loginControl(kullanicilar,username,password);
    if(control){
        sessionStorage.setItem("aktif_oturum",username);
        Yonlendir("userpanel");
    }

}

function loginControl(userInfo,username,password) {
    var loginInfo = {"username" : username , "password" : password}
    loginInfo= JSON.parse(JSON.stringify(loginInfo));
    for (let index = 0; index < userInfo.kullanici_bilgileri.length; index++) {
        if(loginInfo.username == userInfo.kullanici_bilgileri[index].username){
            if(loginInfo.password == userInfo.kullanici_bilgileri[index].password){
                alert("GİRİŞ BİLGİLERİ BAŞARILI SAYFAYA YÖNLENDİRİLİYORSUNUZ.....");
                return true ;
            }
            else{
                alert("GİRİŞ BİLGİLERİNİZ HATALI LÜTFEN TEKRAR DENEYİNİZ.....");
                return false;
            }
        }
    }
    alert("Böyle Bir Kullanıcı Bulunamadı.Lütfen Tekrar Deneyiniz.....");
    return false ;

}

function inputErrorControl() {
    var errorMessageList = ["Lütfen Aşağıdaki Alanları Boş Bırakmayınız : "];
    if(document.getElementById("username").value == ""){
        errorMessageList.push("*Kullanıcı Adı Alanı");
    }
    if(document.getElementById("password").value == ""){
        errorMessageList.push("*Şifre Alanı");
    }

    if (errorMessageList.length>1) {
        var errorMessage="";
        for (let index = 0; index < errorMessageList.length; index++) {
            errorMessage +=errorMessageList[index]+"\n";
        }
        alert(errorMessage);
        return false ;
    }   else{ return true ; }

}


$(document).ready(function(){

    $("#kayit").click(function(){
        Yonlendir("kayit");
    });

    $("#anasayfa").click(function(){
        Yonlendir("anasayfa");
    });

    $("#giris").click(function(){
        let errorControl = inputErrorControl();
        if(errorControl){
            alert("GİRİŞ YAPILIYOR LÜTFEN BEKLEYİNİZ.....");
            Login();
            document.getElementById("loginForm").reset();
        }
    });

  });
