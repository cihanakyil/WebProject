var ilanlar = JSON.parse(localStorage.getItem("ilanlar"));
$(document).ready(function(){

    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
            if(ilanlar[0].ilan_bilgileri[index]["onay-durumu"] == "ONAYLANDI"){
                var ilanid = ilanlar[0].ilan_bilgileri[index].ilanID;
                ilanShow(ilanid,index);
            }
    }

    $("#filtrebaslik").click(function(){

        $(".panel1").slideToggle("slow");
        $(".panel2").slideToggle("slow");
        $(".panel3").slideToggle("slow");
        $(".panel4").slideToggle("slow");
        $("#filtreUygula").slideToggle("slow");

      });

    $("#filtreUygula").click(function(){
        $(".rmCF").remove();
        $(".panel1").slideToggle("slow");
        $(".panel2").slideToggle("slow");
        $(".panel3").slideToggle("slow");
        $(".panel4").slideToggle("slow");
        $("#filtreUygula").slideToggle("slow");
        filtreUygula();
    });

});

function filtreUygula() {
    var uretim_yili_min = parseInt(document.getElementById("uretim_yili_min").value);
    var uretim_yili_max = parseInt(document.getElementById("uretim_yili_max").value);
    var km_min = parseInt(document.getElementById("km-min").value);
    var km_max = parseInt(document.getElementById("km-max").value);
    var fiyat_min = parseInt(document.getElementById("fiyat-min").value);
    var fiyat_max = parseInt(document.getElementById("fiyat-max").value);

    for (let index = 0; index < ilanlar[0].ilan_bilgileri.length; index++) {
        var ilan_uretim_yili = parseInt(ilanlar[0].ilan_bilgileri[index]["uretim-yili"]);
        var ilanfiyat =parseInt(ilanlar[0].ilan_bilgileri[index]["satis-fiyati"]);
        var ilan_km = parseInt(ilanlar[0].ilan_bilgileri[index]["km"]);

        if(ilanlar[0].ilan_bilgileri[index]["onay-durumu"] == "ONAYLANDI"){
            if(document.getElementById("arac-turu").value == ilanlar[0].ilan_bilgileri[index]["arac-turu"] ){
                if(document.getElementById("marka").value == ilanlar[0].ilan_bilgileri[index]["marka"] ){
                    if(document.getElementById("model").value == ilanlar[0].ilan_bilgileri[index]["model"] ){
                        if(document.getElementById("yakit-turu").value == ilanlar[0].ilan_bilgileri[index]["yakit-turu"] ){
                            if(document.getElementById("motor-hacmi").value == ilanlar[0].ilan_bilgileri[index]["motor-hacmi"] ){
                                if(document.getElementById("motor-gucu").value == ilanlar[0].ilan_bilgileri[index]["motor-gucu"] ){
                                    if(document.getElementById("vites").value == ilanlar[0].ilan_bilgileri[index]["vites"] ){
                                        if( ilan_uretim_yili <= uretim_yili_max && ilan_uretim_yili >=uretim_yili_min) {
                                            if( ilan_km <= km_max && ilan_km >=km_min) {
                                                if( ilanfiyat <= fiyat_max && ilanfiyat >=fiyat_min) {
                                                    var ilanid = ilanlar[0].ilan_bilgileri[index].ilanID;
                                                    ilanShow(ilanid,index);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}
}


function ilanShow(ilanid,index){
    $("body").append(createDiv("container-fluid i"+ilanid+"-cf rmCF"));
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
    $(".i"+ilanid+"-21").append(createDiv("col-sm-2 row2-8 i"+ilanid+"-29"));       //  

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
    $(".i"+ilanid+"-57").append(createButton("btn col-sm-12 btnilan","i"+ilanid+"-10",ilanid,));      //i10v
    $(".i"+ilanid+"-cf").append(createBR());
    
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
function createButton(classname,id,ilanID){
    
    var button ="<button type='button' class='"+classname+"' id='"+id+"' onclick=Goster("+ilanID+")><b>İLANI GÖSTER</b></button>";
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

var kategoriler = JSON.parse(localStorage.getItem("kategoriler"));
for (const i in kategoriler[0]["arac-turleri"]) {
    const node = document.createElement("option");
    
    const textnode = document.createTextNode(kategoriler[0]["arac-turleri"][i]);
    node.appendChild(textnode);
    document.getElementById("arac-turu").appendChild(node);
}
document.getElementById("arac-turu").addEventListener("change", addOptionMarka);
document.getElementById("marka").addEventListener("change", addOptionModel);
document.getElementById("arac-turu").addEventListener("change", addOptionMotor);
document.getElementById("arac-turu").addEventListener("change", addOptionYakit);
document.getElementById("arac-turu").addEventListener("change", addOptionVites);

function addOptionMarka() {
     var selected_index= document.getElementById("arac-turu").selectedIndex;
        while (document.getElementById("marka").hasChildNodes()) {
          document.getElementById("marka").removeChild(document.getElementById("marka").firstChild);
        }
        while (document.getElementById("model").hasChildNodes()) {
          document.getElementById("model").removeChild(document.getElementById("model").firstChild);
        }
        if(document.getElementById("arac-turu").value == kategoriler[0]["arac-turleri"][selected_index-1]){

          for (const i in kategoriler[0]["markalar"][0][selected_index-1]) {
             const node = document.createElement("option");
             const textnode = document.createTextNode(kategoriler[0]["markalar"][0][selected_index-1][i]);
             node.appendChild(textnode);
             document.getElementById("marka").appendChild(node);
            }
          }
}

function addOptionModel(){
    var selected_index2= document.getElementById("marka").selectedIndex;
    if(document.getElementById("marka").value == kategoriler[0]["markalar"][0][0][selected_index2]){

      while (document.getElementById("model").hasChildNodes()) {
        document.getElementById("model").removeChild(document.getElementById("model").firstChild);
      }
      for (const i in kategoriler[0]["modeller"][0][0][selected_index2]) {
        const node = document.createElement("option");
        const textnode = document.createTextNode(kategoriler[0]["modeller"][0][0][selected_index2][i]);
        node.appendChild(textnode);
        document.getElementById("model").appendChild(node);
       }
    }
}

function addOptionMotor(){
    var selected_index= document.getElementById("arac-turu").selectedIndex;
    
     while (document.getElementById("motor-hacmi").hasChildNodes()) {
     document.getElementById("motor-hacmi").removeChild(document.getElementById("motor-hacmi").firstChild);
    }
    while (document.getElementById("motor-gucu").hasChildNodes()) {
    document.getElementById("motor-gucu").removeChild(document.getElementById("motor-gucu").firstChild);
    }
      for (const i in kategoriler[0]["motor-hacimleri"][0][0][selected_index-1]) {
        const node = document.createElement("option");
        const textnode = document.createTextNode(kategoriler[0]["motor-hacimleri"][0][selected_index-1][i]);
        node.appendChild(textnode);
        document.getElementById("motor-hacmi").appendChild(node);
       }
       for (const j in kategoriler[0]["motor-gucleri"][0][0][selected_index-1]) {
        const node = document.createElement("option");
        const textnode = document.createTextNode(kategoriler[0]["motor-gucleri"][0][selected_index-1][j]);
        node.appendChild(textnode);
        document.getElementById("motor-gucu").appendChild(node);
       }
    
}

function addOptionYakit(){
  while (document.getElementById("yakit-turu").hasChildNodes()) {
    document.getElementById("yakit-turu").removeChild(document.getElementById("yakit-turu").firstChild);
  }
    for (const i in kategoriler[0]["yakit-turleri"][0][0]) {
      const node = document.createElement("option");
      const textnode = document.createTextNode(kategoriler[0]["yakit-turleri"][0][0][i]);
      node.appendChild(textnode);
      document.getElementById("yakit-turu").appendChild(node);
     }
  
}

function addOptionVites(){
    while (document.getElementById("vites").hasChildNodes()) {
      document.getElementById("vites").removeChild(document.getElementById("vites").firstChild);
    }
      for (const i in kategoriler[0]["vites-turleri"][0][0]) {
        const node = document.createElement("option");
        const textnode = document.createTextNode(kategoriler[0]["vites-turleri"][0][0][i]);
        node.appendChild(textnode);
        document.getElementById("vites").appendChild(node);
       }
    
  }






