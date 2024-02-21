var ilanlar = JSON.parse(localStorage.getItem("ilanlar"));
var aktif_oturum = sessionStorage.getItem("aktif_oturum");

$(document).ready(function(){

    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
        if(aktif_oturum ==ilanlar[0].ilan_bilgileri[index].kullanici_adi){
                var ilanid = ilanlar[0].ilan_bilgileri[index].ilanID;
                ilanShow(ilanid);
                setInputValue(ilanid,index); 
        }
    }
});

function setInputValue(ilanid,index){

    document.getElementById("i"+ilanid+"-7").value = ilanlar[0].ilan_bilgileri[index]["ilan-baslik"];
    document.getElementById("i"+ilanid+"-8").src = "../img/"+ilanlar[0].ilan_bilgileri[index]["resim_yolu"];
    document.getElementById("i"+ilanid+"-11").value = ilanlar[0].ilan_bilgileri[index]["onay-durumu"];
    document.getElementById("i"+ilanid+"-13").value = ilanlar[0].ilan_bilgileri[index]["arac-turu"];
    document.getElementById("i"+ilanid+"-15").value = ilanlar[0].ilan_bilgileri[index]["uretim-yili"];
    document.getElementById("i"+ilanid+"-17").value = ilanlar[0].ilan_bilgileri[index]["marka"];
    document.getElementById("i"+ilanid+"-19").value = ilanlar[0].ilan_bilgileri[index]["model"];
    document.getElementById("i"+ilanid+"-21").value = ilanlar[0].ilan_bilgileri[index]["yakit-turu"];
    document.getElementById("i"+ilanid+"-23").value = ilanlar[0].ilan_bilgileri[index]["motor-gucu"];
    document.getElementById("i"+ilanid+"-25").value = ilanlar[0].ilan_bilgileri[index]["motor-hacmi"];
    document.getElementById("i"+ilanid+"-27").value = ilanlar[0].ilan_bilgileri[index]["vites"];
    document.getElementById("i"+ilanid+"-29").value = ilanlar[0].ilan_bilgileri[index]["km"];
    document.getElementById("i"+ilanid+"-31").value = ilanlar[0].ilan_bilgileri[index]["satis-fiyati"];
    document.getElementById("i"+ilanid+"-32").value = ilanlar[0].ilan_bilgileri[index]["aciklama"];
    

    document.getElementById("i"+ilanid+"-44").checked = ilanlar[0].ilan_bilgileri[index]["sis-fari"];
    document.getElementById("i"+ilanid+"-45").checked = ilanlar[0].ilan_bilgileri[index]["katlanabilir-ayna"];
    document.getElementById("i"+ilanid+"-46").checked = ilanlar[0].ilan_bilgileri[index]["park-sensor"];
    document.getElementById("i"+ilanid+"-47").checked = ilanlar[0].ilan_bilgileri[index]["merkezi-kilit"];
    document.getElementById("i"+ilanid+"-48").checked = ilanlar[0].ilan_bilgileri[index]["cam-tavan"];
}
function ilanShow(ilanID){
    $(".r1").append(createDiv("col-sm-12 i"+ilanID+"-1"));       //col1     i1-1
    $(".i"+ilanID+"-1").append(createDiv("row i"+ilanID+"-2"));             //r2            i1-2
    $(".i"+ilanID+"-2").append(createDiv("col-sm-4 i"+ilanID+"-3"));   //col1-1    i1-3
    $(".i"+ilanID+"-2").append(createDiv("col-sm-4 i"+ilanID+"-4"));   //col1-2    i1-4
    $(".i"+ilanID+"-2").append(createDiv("col-sm-4 i"+ilanID+"-5"));   //col1-3    i1-5
    $(".i"+ilanID+"-3").append(createDiv("input-group i"+ilanID+"-6"));       //ig1   i1-6
    $(".i"+ilanID+"-6").append(createSpan("input-group-text","İLAN BAŞLIĞI"));
    $(".i"+ilanID+"-6").append(createInput("form-control","text","i"+ilanID+"-7"));   //ilan-baslik  i1-7
    $(".i"+ilanID+"-3").append(createImg("","i"+ilanID+"-8"));          //resim1 i1-8
    $(".i"+ilanID+"-3").append(createInput("form-control file","file","i"+ilanID+"-9",ilanID));    //inputImage i1-9
    $(".i"+ilanID+"-3").append(createDiv("input-group i"+ilanID+"-10"));             //ig1-1       i1-10
    $(".i"+ilanID+"-10").append(createSpan("input-group-text","İLAN DURUMU"));
    $(".i"+ilanID+"-10").append(createInput("form-control","text","i"+ilanID+"-11"));  //ilan-durumu   i1-11
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-12"));       //ig2 i1-12
    $(".i"+ilanID+"-12").append(createSpan("input-group-text","ARAÇ TÜRÜ"));
    $(".i"+ilanID+"-12").append(createInput("form-control","text","i"+ilanID+"-13"));    //arac-turu  i1-13
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-14"));       //ig3       i1-14
    $(".i"+ilanID+"-14").append(createSpan("input-group-text","ÜRETİM YILI"));
    $(".i"+ilanID+"-14").append(createInput("form-control","text","i"+ilanID+"-15"));  //uretim-yili i1-15
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-16"));   //ig4       i1-16
    $(".i"+ilanID+"-16").append(createSpan("input-group-text","MARKA"));
    $(".i"+ilanID+"-16").append(createInput("form-control","text","i"+ilanID+"-17"));   //marka i1-17
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-18"));   //ig5   i1-18
    $(".i"+ilanID+"-18").append(createSpan("input-group-text","MODEL"));
    $(".i"+ilanID+"-18").append(createInput("form-control","text","i"+ilanID+"-19"));   //model i1-19
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-20"));       //ig6   i1-20
    $(".i"+ilanID+"-20").append(createSpan("input-group-text","YAKIT TÜRÜ"));
    $(".i"+ilanID+"-20").append(createInput("form-control","text","i"+ilanID+"-21"));  //yakit-turu   i1-21
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-22"));       //ig7   i1-22
    $(".i"+ilanID+"-22").append(createSpan("input-group-text","MOTOR HACMİ"));
    $(".i"+ilanID+"-22").append(createInput("form-control","text","i"+ilanID+"-23"));  //motor-hacmi i1-23
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-24"));
    $(".i"+ilanID+"-24").append(createSpan("input-group-text","MOTOR GÜCÜ"));
    $(".i"+ilanID+"-24").append(createInput("form-control","text","i"+ilanID+"-25"));   //motor-gucu i1-25
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-26"));
    $(".i"+ilanID+"-26").append(createSpan("input-group-text","VİTES"));
    $(".i"+ilanID+"-26").append(createInput("form-control","text","i"+ilanID+"-27"));   //vites i1-27
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-28"));
    $(".i"+ilanID+"-28").append(createSpan("input-group-text","KİLOMETRE"));
    $(".i"+ilanID+"-28").append(createInput("form-control","text","i"+ilanID+"-29"));   // i1-29
    $(".i"+ilanID+"-4").append(createDiv("input-group i"+ilanID+"-30"));
    $(".i"+ilanID+"-30").append(createSpan("input-group-text","SATIŞ FİYATI"));
    $(".i"+ilanID+"-30").append(createInput("form-control","text","i"+ilanID+"-31"));   // i1-31
    $(".i"+ilanID+"-5").append(createH("aciklama","AÇIKLAMA"));
    $(".i"+ilanID+"-5").append(createTextArea("form-control",6,"i"+ilanID+"-32")); // i1-32
    $(".i"+ilanID+"-5").append(createH("donanim_ozellikleri","DONANIM ÖZELLİKLERİ"));
    $(".i"+ilanID+"-5").append(createDiv("row i"+ilanID+"-33"));        // r3   i1-33
    $(".i"+ilanID+"-33").append(createDiv("col-sm-4 i"+ilanID+"-34"));      // col1-4   i1-34
    $(".i"+ilanID+"-33").append(createDiv("col-sm-4 i"+ilanID+"-35"));      // col1-5   i1-35   
    $(".i"+ilanID+"-33").append(createDiv("col-sm-4 i"+ilanID+"-36"));      // col1-6   i1-36
    $(".i"+ilanID+"-33").append(createDiv("col-sm-4 i"+ilanID+"-37"));      // col1-7   i1-37
    $(".i"+ilanID+"-33").append(createDiv("col-sm-4 i"+ilanID+"-38"));      // col1-8   i1-38
    $(".i"+ilanID+"-34").append(createDiv("form-check i"+ilanID+"-39"));           //fc1 i1-39
    $(".i"+ilanID+"-39").append(createInput("form-check-input","checkbox","i"+ilanID+"-44"));     //sis-fari i1-44
    $(".i"+ilanID+"-39").append(createLabel("form-check-label","SİS FARI"));        
    $(".i"+ilanID+"-35").append(createDiv("form-check i"+ilanID+"-40"));            //fc2 i1-40
    $(".i"+ilanID+"-40").append(createInput("form-check-input","checkbox","i"+ilanID+"-45"));     // i1-45
    $(".i"+ilanID+"-40").append(createLabel("form-check-label","KATLANABİLİR AYNA"));
    $(".i"+ilanID+"-36").append(createDiv("form-check i"+ilanID+"-41"));            //fc3 i1-41
    $(".i"+ilanID+"-41").append(createInput("form-check-input","checkbox","i"+ilanID+"-46"));  // i1-46
    $(".i"+ilanID+"-41").append(createLabel("form-check-label","PARK SENSÖRÜ"));
    $(".i"+ilanID+"-37").append(createDiv("form-check i"+ilanID+"-42"));            //fc4 i1-42
    $(".i"+ilanID+"-42").append(createInput("form-check-input","checkbox","i"+ilanID+"-47"));    // i1-47
    $(".i"+ilanID+"-42").append(createLabel("form-check-label","MERKEZİ KİLİT"));
    $(".i"+ilanID+"-38").append(createDiv("form-check i"+ilanID+"-43"));            //fc5 i1-43
    $(".i"+ilanID+"-43").append(createInput("form-check-input","checkbox","i"+ilanID+"-48"));        // i1-48
    $(".i"+ilanID+"-43").append(createLabel("form-check-label","CAM TAVAN"));
    $(".i"+ilanID+"-5").append(createButton("btn guncelle w-50","i"+ilanID+"-49","GÜNCELLE",ilanID)); //i-49
    $(".i"+ilanID+"-5").append(createButton("btn iptal w-25","i"+ilanID+"-50","İPTAL",ilanID));       //i-50
    $(".i"+ilanID+"-5").append(createButton("btn kaydet w-25","i"+ilanID+"-51","KAYDET",ilanID));     //i-51
    $(".r1").append(createDiv("col-sm-12 bosluk","<br>"));  
}


function imageLoad(ilanid){
  document.getElementById("i"+ilanid+"-8").src = "../img/"+document.getElementById("i"+ilanid+"-9").files[0].name;
}

function Kaydet(ilanid){

    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
        
        if(ilanlar[0].ilan_bilgileri[index]["ilanID"]== ilanid){

            ilanlar[0].ilan_bilgileri[index]["ilan-baslik"]    = document.getElementById("i"+ilanid+"-7").value ;

            if(document.getElementById("i"+ilanid+"-9").value != ""){
            ilanlar[0].ilan_bilgileri[index]["resim_yolu"]    = document.getElementById("i"+ilanid+"-9").files[0].name;

            }

            if(document.getElementById("i"+ilanid+"-11").value == "ONAYLANDI"){
                ilanlar[0].ilan_bilgileri[index]["onay-durumu"]    = "ONAY BEKLENİYOR";
                ilanlar[0].onaylanan_ilan_sayisi -=1;
                ilanlar[0].bekleyen_ilan_sayisi +=1;
                }
            ilanlar[0].ilan_bilgileri[index]["arac-turu"]      = document.getElementById("i"+ilanid+"-13").value ;
            ilanlar[0].ilan_bilgileri[index]["uretim-yili"]   = document.getElementById("i"+ilanid+"-15").value ;
            ilanlar[0].ilan_bilgileri[index]["marka"]         = document.getElementById("i"+ilanid+"-17").value ;
            ilanlar[0].ilan_bilgileri[index]["model"]         = document.getElementById("i"+ilanid+"-19").value ;
            ilanlar[0].ilan_bilgileri[index]["yakit-turu"]     = document.getElementById("i"+ilanid+"-21").value ;
            ilanlar[0].ilan_bilgileri[index]["motor-gucu"]     = document.getElementById("i"+ilanid+"-23").value  ;
            ilanlar[0].ilan_bilgileri[index]["motor-hacmi"]    = document.getElementById("i"+ilanid+"-25").value ;
            ilanlar[0].ilan_bilgileri[index]["vites"]          = document.getElementById("i"+ilanid+"-27").value ;
            ilanlar[0].ilan_bilgileri[index]["km"]             = document.getElementById("i"+ilanid+"-29").value ;
            ilanlar[0].ilan_bilgileri[index]["satis-fiyati"]  = document.getElementById("i"+ilanid+"-31").value ;
            ilanlar[0].ilan_bilgileri[index]["aciklama"]       = document.getElementById("i"+ilanid+"-32").value ;
            ilanlar[0].ilan_bilgileri[index]["sis-fari"]        = document.getElementById("i"+ilanid+"-44").checked  ;
            ilanlar[0].ilan_bilgileri[index]["katlanabilir-ayna"] = document.getElementById("i"+ilanid+"-45").checked ;
            ilanlar[0].ilan_bilgileri[index]["park-sensor"]        = document.getElementById("i"+ilanid+"-46").checked ;
            ilanlar[0].ilan_bilgileri[index]["merkezi-kilit"]     = document.getElementById("i"+ilanid+"-47").checked ;
            ilanlar[0].ilan_bilgileri[index]["cam-tavan"]         = document.getElementById("i"+ilanid+"-48").checked ;
        }
    }


     localStorage.setItem("ilanlar",JSON.stringify(ilanlar));
     alert("İLAN DEĞİŞİKLİKLERİ BAŞARILI BİR ŞEKİLDE KAYDEDİLDİ.");

     document.getElementById("i"+ilanid+"-7").disabled = true;
    document.getElementById("i"+ilanid+"-9").disabled = true;
    document.getElementById("i"+ilanid+"-13").disabled = true;
    document.getElementById("i"+ilanid+"-15").disabled = true;
    document.getElementById("i"+ilanid+"-17").disabled = true;
    document.getElementById("i"+ilanid+"-19").disabled = true;
    document.getElementById("i"+ilanid+"-21").disabled = true;
    document.getElementById("i"+ilanid+"-23").disabled = true;
    document.getElementById("i"+ilanid+"-25").disabled = true;
    document.getElementById("i"+ilanid+"-27").disabled = true;
    document.getElementById("i"+ilanid+"-29").disabled = true;
    document.getElementById("i"+ilanid+"-31").disabled = true;
    document.getElementById("i"+ilanid+"-32").disabled = true;
    document.getElementById("i"+ilanid+"-44").disabled = true;
    document.getElementById("i"+ilanid+"-45").disabled = true;
    document.getElementById("i"+ilanid+"-46").disabled = true;
    document.getElementById("i"+ilanid+"-47").disabled = true;
    document.getElementById("i"+ilanid+"-48").disabled = true;
    document.getElementById("i"+ilanid+"-49").disabled = false;
    document.getElementById("i"+ilanid+"-51").disabled = true;
    window.location.href = "mevcut_ilan.html";
    
}

function Iptal(ilanid){

    alert("İLANI İPTAL ETMEK İSTEDİĞİNİZDEN EMİNMİSİNİZ?");

    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
        if(ilanlar[0].ilan_bilgileri[index]["ilanID"]== ilanid){
            if(ilanlar[0].ilan_bilgileri[index]["onay-durumu"] == "ONAYLANDI"){
                ilanlar[0].onaylanan_ilan_sayisi -=1;
            }
            else{
                ilanlar[0].bekleyen_ilan_sayisi -=1;
            }
            ilanlar[0].ilan_bilgileri.splice(index,1);
            localStorage.setItem("ilanlar",JSON.stringify(ilanlar));
        }

    }

    alert("İLAN BAŞARILI BİR ŞEKİLDE İPTAL EDİLDİ.");
    window.location.href="mevcut_ilan.html";
   
}
function Guncelle(ilanid){
    document.getElementById("i"+ilanid+"-7").disabled = false;
    document.getElementById("i"+ilanid+"-9").disabled = false;
    document.getElementById("i"+ilanid+"-13").disabled = false;
    document.getElementById("i"+ilanid+"-15").disabled = false;
    document.getElementById("i"+ilanid+"-17").disabled = false;
    document.getElementById("i"+ilanid+"-19").disabled = false;
    document.getElementById("i"+ilanid+"-21").disabled = false;
    document.getElementById("i"+ilanid+"-23").disabled = false;
    document.getElementById("i"+ilanid+"-25").disabled = false;
    document.getElementById("i"+ilanid+"-27").disabled = false;
    document.getElementById("i"+ilanid+"-29").disabled = false;
    document.getElementById("i"+ilanid+"-31").disabled = false;
    document.getElementById("i"+ilanid+"-32").disabled = false;
    document.getElementById("i"+ilanid+"-44").disabled = false;
    document.getElementById("i"+ilanid+"-45").disabled = false;
    document.getElementById("i"+ilanid+"-46").disabled = false;
    document.getElementById("i"+ilanid+"-47").disabled = false;
    document.getElementById("i"+ilanid+"-48").disabled = false;
    document.getElementById("i"+ilanid+"-49").disabled = true;
    document.getElementById("i"+ilanid+"-51").disabled = false;
}

function createDiv(classname,divValue=""){
    var div = "<div class='" + classname +"'>" + divValue + "</div>";
    return div ;
}
function createSpan(classname,spanValue=""){
    var span = "<span class='"+classname+"'>" + "<b>"+spanValue +"</b>" +"</span>";
    return span;
}
function createInput(classname,typename,id,ilanID){
    if(typename == "file"){
        var input = "<input type='"+typename+"' class='" + classname+"' id='"+id+"' value='' onchange=imageLoad("+ilanID+") disabled>";
    }
    else{
        var input = "<input type='"+typename+"' class='" + classname+"' id='"+id+"' value='' disabled>";
    }
    return input;
}
function createImg(src,id){
    var img = "<img src='"+src+"' id='"+id+"'>";
    return img;
}
function createLabel(classname,labelValue){
    var label = "<label class='"+classname+"'>"+labelValue+"</label>";
    return label;
}
function createTextArea(classname,rows,id){
    var textarea = "<textarea class='"+classname+"' rows='"+rows+"' id='"+id+"' disabled></textarea>";
    return textarea;
}
function createButton(classname,id,buttonValue,ilanID){
    if(buttonValue == "KAYDET"){
        var button ="<button type='button' class='"+classname+"' id='"+id+"' onclick=Kaydet("+ilanID+") disabled><b>"+buttonValue+"</b></button>";
    }
    if(buttonValue == "GÜNCELLE"){
        var button ="<button type='button' class='"+classname+"' id='"+id+"' onclick=Guncelle("+ilanID+")><b>"+buttonValue+"</b></button>";
    }
    if(buttonValue == "İPTAL"){
        var button ="<button type='button' class='"+classname+"' id='"+id+"' onclick=Iptal("+ilanID+")><b>"+buttonValue+"</b></button>";
    }
    return button ;
}
function createH(id,hValue){
    var H ="<h3 id='"+id+"'>"+hValue+"</h3>";
    return H;
}