var aktif_oturum = sessionStorage.getItem("aktif_oturum");
var isim , soyisim, telefon , mail ;
var bilgiler = JSON.parse(localStorage.getItem("kullanicilar"));

for (var i = 0; i < bilgiler.kullanici_bilgileri.length; i++) {
    if (bilgiler.kullanici_bilgileri[i].username == aktif_oturum) {
        isim = bilgiler.kullanici_bilgileri[i].isim;
        soyisim = bilgiler.kullanici_bilgileri[i].soyisim;
        telefon = bilgiler.kullanici_bilgileri[i].telefon;
        mail = bilgiler.kullanici_bilgileri[i].mail;
    }
}

document.getElementById("isim-value").innerHTML = isim;
document.getElementById("soyisim-value").innerHTML = soyisim;
document.getElementById("telefon-value").innerHTML = telefon;
document.getElementById("mail-value").innerHTML = mail;
