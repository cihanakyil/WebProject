var ilanlar = JSON.parse(localStorage.getItem("ilanlar"));
$(document).ready(function(){
    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
            if(ilanlar[0].ilan_bilgileri[index]["onay-durumu"] == "ONAY BEKLENİYOR"){
                var ilanid = ilanlar[0].ilan_bilgileri[index].ilanID;
                ilanShow(ilanid,index);
            }
    }
});

function ilanShow(ilanid,index){
    $("body").append(createDiv("container-fluid i"+ilanid+"-cf"));
    $(".i"+ilanid+"-cf").append(createBR());
    $(".i"+ilanid+"-cf").append(createDiv("row row1 i"+ilanid+"-12"));          
    $(".i"+ilanid+"-12").append(createDiv("col-sm-3 row1-1 i"+ilanid+"-13"));    
    $(".i"+ilanid+"-12").append(createDiv("col-sm-9 row1-2 i"+ilanid+"-17"));    
    $(".i"+ilanid+"-13").append(createDiv("row row1-1-1 i"+ilanid+"-14"));      
    $(".i"+ilanid+"-14").append(createDiv("col-sm-5 row1-1-1-1 i"+ilanid+"-15"));   
    $(".i"+ilanid+"-14").append(createDiv("col-sm-7 row1-1-1-2 i"+ilanid+"-16"));     
    $(".i"+ilanid+"-15").append(createH("","İLAN ID :"));   
    $(".i"+ilanid+"-16").append(createH("i"+ilanid+"-1","#" + ilanid));    //i1v
    $(".i"+ilanid+"-17").append(createDiv("row row1-2-1 i"+ilanid+"-18"));  
    $(".i"+ilanid+"-18").append(createDiv("col-sm-1 row1-2-1-1 i"+ilanid+"-19"));  
    $(".i"+ilanid+"-18").append(createDiv("col-sm-11 row1-2-1-2 i"+ilanid+"-20"));  
    $(".i"+ilanid+"-19").append(createH("","BAŞLIK:"));  
    $(".i"+ilanid+"-20").append(createH("i"+ilanid+"-2", ilanlar[0].ilan_bilgileri[index]["ilan-baslik"]));   //i2v
    $(".i"+ilanid+"-cf").append(createDiv("row row2 i"+ilanid+"-21")); 
    $(".i"+ilanid+"-21").append(createDiv("col-sm-2 row2-1 i"+ilanid+"-22"));       //+
    $(".i"+ilanid+"-21").append(createDiv("col-sm-2 row2-2 i"+ilanid+"-23"));       //+
    $(".i"+ilanid+"-21").append(createDiv("col-sm-1 row2-3 i"+ilanid+"-24"));       //+
    $(".i"+ilanid+"-21").append(createDiv("col-sm-1 row2-4 i"+ilanid+"-25"));       //    +
    $(".i"+ilanid+"-21").append(createDiv("col-sm-1 row2-5 i"+ilanid+"-26"));       //   
    $(".i"+ilanid+"-21").append(createDiv("col-sm-1 row2-6 i"+ilanid+"-27"));       //   
    $(".i"+ilanid+"-21").append(createDiv("col-sm-2 row2-7 i"+ilanid+"-28"));       //   
    $(".i"+ilanid+"-21").append(createDiv("col-sm-1 row2-8 i"+ilanid+"-29"));       //  
    $(".i"+ilanid+"-21").append(createDiv("col-sm-1 row2-9 i"+ilanid+"-30"));       //
    $(".i"+ilanid+"-22").append(createImg("../img/"+ilanlar[0].ilan_bilgileri[index]["resim_yolu"],"i"+ilanid+"-3"));    //i3v
    $(".i"+ilanid+"-23").append(createDiv("row row2-2-1 i"+ilanid+"-31"));   
    $(".i"+ilanid+"-31").append(createDiv("col-sm-12 row2-2-1-1 i"+ilanid+"-32"));    
    $(".i"+ilanid+"-31").append(createDiv("col-sm-12 row2-2-1-2 i"+ilanid+"-33"));    
    $(".i"+ilanid+"-31").append(createDiv("col-sm-12 row2-2-1-3 i"+ilanid+"-34"));  
    $(".i"+ilanid+"-32").append(createP());  
    $(".i"+ilanid+"-33").append(createH("","ARAÇ TÜRÜ"));    
    $(".i"+ilanid+"-34").append(createH("i"+ilanid+"-4",ilanlar[0].ilan_bilgileri[index]["arac-turu"]));    //i4v
    $(".i"+ilanid+"-24").append(createDiv("row row2-3-1 i"+ilanid+"-35"));   
    $(".i"+ilanid+"-35").append(createDiv("col-sm-12 row2-3-1-1 i"+ilanid+"-36"));    
    $(".i"+ilanid+"-35").append(createDiv("col-sm-12 row2-3-1-2 i"+ilanid+"-37"));    
    $(".i"+ilanid+"-35").append(createDiv("col-sm-12 row2-3-1-3 i"+ilanid+"-38"));  
    $(".i"+ilanid+"-36").append(createP());  
    $(".i"+ilanid+"-37").append(createH("","MARKA"));    
    $(".i"+ilanid+"-38").append(createH("i"+ilanid+"-5",ilanlar[0].ilan_bilgileri[index]["marka"]));    //i5v
    $(".i"+ilanid+"-25").append(createDiv("row row2-4-1 i"+ilanid+"-39"));   
    $(".i"+ilanid+"-39").append(createDiv("col-sm-12 row2-4-1-1 i"+ilanid+"-40"));    
    $(".i"+ilanid+"-39").append(createDiv("col-sm-12 row2-4-1-2 i"+ilanid+"-41"));    
    $(".i"+ilanid+"-39").append(createDiv("col-sm-12 row2-4-1-3 i"+ilanid+"-42"));  
    $(".i"+ilanid+"-40").append(createP());  
    $(".i"+ilanid+"-41").append(createH("","MODEL"));    
    $(".i"+ilanid+"-42").append(createH("i"+ilanid+"-6",ilanlar[0].ilan_bilgileri[index]["model"]));    //i6v
    $(".i"+ilanid+"-26").append(createDiv("row row2-5-1 i"+ilanid+"-43"));   
    $(".i"+ilanid+"-43").append(createDiv("col-sm-12 row2-5-1-1 i"+ilanid+"-44"));    
    $(".i"+ilanid+"-43").append(createDiv("col-sm-12 row2-5-1-2 i"+ilanid+"-45"));    
    $(".i"+ilanid+"-43").append(createDiv("col-sm-12 row2-5-1-3 i"+ilanid+"-46"));  
    $(".i"+ilanid+"-44").append(createP());  
    $(".i"+ilanid+"-45").append(createH("","FİYAT"));    
    $(".i"+ilanid+"-46").append(createH("i"+ilanid+"-7",ilanlar[0].ilan_bilgileri[index]["satis-fiyati"]));    //i7v
    $(".i"+ilanid+"-27").append(createDiv("row row2-6-1 i"+ilanid+"-47"));   
    $(".i"+ilanid+"-47").append(createDiv("col-sm-12 row2-6-1-1 i"+ilanid+"-48"));    
    $(".i"+ilanid+"-47").append(createDiv("col-sm-12 row2-6-1-2 i"+ilanid+"-49"));    
    $(".i"+ilanid+"-47").append(createDiv("col-sm-12 row2-6-1-3 i"+ilanid+"-50"));  
    $(".i"+ilanid+"-48").append(createP());  
    $(".i"+ilanid+"-49").append(createH("","YIL"));    
    $(".i"+ilanid+"-50").append(createH("i"+ilanid+"-8",ilanlar[0].ilan_bilgileri[index]["uretim-yili"]));    //i8v
    $(".i"+ilanid+"-28").append(createDiv("row row2-7-1 i"+ilanid+"-51"));   
    $(".i"+ilanid+"-51").append(createDiv("col-sm-12 row2-7-1-1 i"+ilanid+"-52"));    
    $(".i"+ilanid+"-51").append(createDiv("col-sm-12 row2-7-1-2 i"+ilanid+"-53"));    
    $(".i"+ilanid+"-51").append(createDiv("col-sm-12 row2-7-1-3 i"+ilanid+"-54"));  
    $(".i"+ilanid+"-52").append(createP());  
    $(".i"+ilanid+"-53").append(createH("","KULLANICI ADI"));    
    $(".i"+ilanid+"-54").append(createH("i"+ilanid+"-9",ilanlar[0].ilan_bilgileri[index]["kullanici_adi"]));    //i9v
    $(".i"+ilanid+"-29").append(createDiv("row row2-8-1 i"+ilanid+"-55"));   
    $(".i"+ilanid+"-55").append(createDiv("col-sm-12 row2-8-1-1 i"+ilanid+"-56"));    
    $(".i"+ilanid+"-55").append(createDiv("col-sm-12 row2-8-1-2 i"+ilanid+"-57"));    
    $(".i"+ilanid+"-56").append(createBR());   
    $(".i"+ilanid+"-57").append(createButton("btn col-sm-12","i"+ilanid+"-10",ilanid,"ONAYLA"));      //i10v
    $(".i"+ilanid+"-30").append(createDiv("row row2-9-1 i"+ilanid+"-58"));   
    $(".i"+ilanid+"-58").append(createDiv("col-sm-12 row2-9-1-1 i"+ilanid+"-59"));    
    $(".i"+ilanid+"-58").append(createDiv("col-sm-12 row2-9-1-2 i"+ilanid+"-60"));    
    $(".i"+ilanid+"-59").append(createBR());   
    $(".i"+ilanid+"-60").append(createButton("btn","i"+ilanid+"-11",ilanid,"İPTAL ET"));      //i11v
    $(".i"+ilanid+"-cf").append(createBR());
    
}




function Iptal(ilanid){
    alert("İLANI İPTAL ETMEK İSTEDİĞİNİZDEN EMİNMİSİNİZ?");

    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
        if(ilanlar[0].ilan_bilgileri[index]["ilanID"]== ilanid){
            ilanlar[0].ilan_bilgileri.splice(index,1);
            ilanlar[0].bekleyen_ilan_sayisi -=1;
            localStorage.setItem("ilanlar",JSON.stringify(ilanlar));
        }

    }

    alert("İLAN BAŞARILI BİR ŞEKİLDE İPTAL EDİLDİ.");
    window.location.href="bekleyen_ilanlar.html";
}

function Onayla(ilanid){

    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
        if(ilanlar[0].ilan_bilgileri[index]["ilanID"]== ilanid){
            ilanlar[0].ilan_bilgileri[index]["onay-durumu"] = "ONAYLANDI";
            ilanlar[0].onaylanan_ilan_sayisi +=1;
            ilanlar[0].bekleyen_ilan_sayisi -=1;
            localStorage.setItem("ilanlar",JSON.stringify(ilanlar));
        }

    }
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
function createImg(src="",id){
    var img = "<img src='"+src+"' id='"+id+"' alt='AracResim'>";
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
function createButton(classname,id,ilanID,buttonValue){
    if(buttonValue == "ONAYLA"){
        var button ="<button type='button' class='"+classname+"' id='"+id+"' onclick=Onayla("+ilanID+")><b>ONAYLA</b></button>";
    }
    if(buttonValue == "İPTAL ET"){
        var button ="<button type='button' class='"+classname+"' id='"+id+"' onclick=Iptal("+ilanID+")><b>İPTAL ET</b></button>";
    }
    return button ;
}
function createH(id="",hValue=""){
    var H ="<h6 id='"+id+"' class='h6'>"+hValue+"</h6>";
    return H;
}

function createP(){
    var p ="<p></p>";
    return p;
}

function createBR(){
    var br ="<br>";
    return br;
}