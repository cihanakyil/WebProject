function Yonlendir(buton){
    if(buton == "buton1"){
        window.location.href="userlogin.html";
    }
    else if(buton == "buton2"){
        window.location.href="anasayfa.html";
    }
}

var isim , soyisim,telefon,mail,username,password,retry_password ;

function Kaydet(){
    isim = document.getElementById("isim").value;
    soyisim = document.getElementById("soyisim").value;
    telefon = document.getElementById("telefon").value;
    mail = document.getElementById("e-mail").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    retry_password = document.getElementById("retry-password").value;
    
    StorageControl();

    var kullanicilar = JSON.parse(localStorage.getItem("kullanicilar"));
    kullanicilar["kullanici_sayisi"] +=1;
    kullanicilar["kullanici_bilgileri"].push({
        "id" : kullanicilar["kullanici_sayisi"],
        "isim" : isim,
        "soyisim" : soyisim,
        "telefon" : telefon,
        "mail" : mail,
        "username" : username,
        "password" : password
    });
    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));
}

function StorageControl() {
    if(localStorage.getItem("kullanicilar")==null){
        var kullanicilar = {
            "kullanici_sayisi" : 0 ,
            "kullanici_bilgileri" : []
        }
        localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));
    }
}

function inputErrorControl() {
    var errorMessageList = ["Lütfen Aşağıdaki Alanları Boş Bırakmayınız : "];
    if(document.getElementById("isim").value == ""){
        errorMessageList.push("*İsim Alanı");
    }
    if(document.getElementById("soyisim").value == ""){
        errorMessageList.push("*Soyisim Alanı");
    }
    if(document.getElementById("telefon").value == ""){
        errorMessageList.push("*Telefon Alanı");
    }
    if(document.getElementById("e-mail").value == ""){
        errorMessageList.push("*Mail Alanı");
    }
    if(document.getElementById("username").value == ""){
        errorMessageList.push("*Kullanıcı Adı Alanı");
    }
    if(document.getElementById("password").value == ""){
        errorMessageList.push("*Şifre Alanı");
    }
    if(document.getElementById("retry-password").value == ""){
        errorMessageList.push("*Şifre Tekrarı Alanı");
    }
  
    if (errorMessageList.length>1) {
        var errorMessage="";
        for (let index = 0; index < errorMessageList.length; index++) {
            errorMessage +=errorMessageList[index]+"\n";
        }
        alert(errorMessage);
        return false ;
    }   else{
            if(document.getElementById("password").value == document.getElementById("retry-password").value){
                alert("KAYIT OLUŞTURULUYOR LÜTFEN BEKLEYİNİZ.");
                return true ;
            }
            else{
                alert("LÜTFEN ŞİFRE TEKRARINI DOĞRU GİRİNİZ.");
                return false ;
            }
    }
}

$(document).ready(function(){
    $("#buton1").click(function(){
        Yonlendir("buton1");
    });

    $("#buton2").click(function(){
        Yonlendir("buton2");
    });

    $("#kayit").click(function(){
        let control = inputErrorControl();
        if(control){
            Kaydet();
            alert("KAYIT İŞLEMİNİZ BAŞARIYLA GEÇEKLEŞTİRİLDİ\n GİRİŞ YAPABİLİRSİNİZ.");
            document.getElementById("regForm").reset();  
        }
    });

  });



