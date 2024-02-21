var x="";
var sayi1="";
var sayi2="";
var operator="";
var sonuc =null;

$(document).ready(function(){
              $("#sifir").click(

                function()
                {
                      x=x+"0";
                      document.getElementById("ekran").innerHTML=x;
              


                }

            );
              $("#bir").click(function(){
                      if (x=="0") {
                         x="";
                      }
                      x=x+"1";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#iki").click(function(){
                      if (x=="0") {
                         x="";
                      }
                      x=x+"2";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#uc").click(function(){

                     if (x=="0") {
                         x="";
                      }
                      x=x+"3";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#dort").click(function(){
                      if (x=="0") {
                        x="";
                     }
                      x=x+"4";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#bes").click(function(){
                     if (x=="0") {
                      x="";

                     }
                      x=x+"5";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#alti").click(function(){
                if (x=="0") {
                    x="";
                 }
                      x=x+"6";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#yedi").click(function(){
                if (x=="0") {
                    x="";
                 }
                      x=x+"7";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#sekiz").click(function(){
                if (x=="0") {
                    x="";
                 }
                      x=x+"8";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#dokuz").click(function(){
                if (x=="0") {
                    x="";
                 }
                      x=x+"9";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#carpma").click(function(){
                      x=x+"*";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#bolme").click(function(){
                      x=x+"/";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#eksi").click(function(){
                      x=x+"-";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#arti").click(function(){
                      x=x+"+";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#nokta").click(function(){
                      x=x+".";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#sil").click(function(){
                      x="";
                      sayi1="";
                      sayi2="";
                      sonuc="";
                      document.getElementById("ekran").innerHTML=x;
              });
              $("#esit").click(function(){
                if (x.indexOf("+",0) != -1) {
                    operator="+";
                    for ( i = 0; i < x.indexOf("+",0); i++) {
                        sayi1=sayi1+ x[i];
                    }
                    for ( i = x.indexOf("+",0)+1; i < x.length; i++) {
                        sayi2=sayi2+ x[i];
                    }
                    sayi1=Number(sayi1);
                    sayi2=Number(sayi2);
                    sonuc = sayi1+sayi2;
                }
                if (x.indexOf("-",0) != -1) {
                    operator="-";
                    for ( i = 0; i < x.indexOf("-",0); i++) {
                        sayi1=sayi1+ x[i];
                    }
                    for ( i = x.indexOf("-",0)+1; i < x.length; i++) {
                        sayi2=sayi2+ x[i];
                    }
                    sayi1=Number(sayi1);
                    sayi2=Number(sayi2);
                    sonuc = sayi1-sayi2;
                }
                if (x.indexOf("/",0) != -1) {
                    operator="/";
                    for ( i = 0; i < x.indexOf("/",0); i++) {
                        sayi1=sayi1+ x[i];
                    }
                    for ( i = x.indexOf("/",0)+1; i < x.length; i++) {
                        sayi2=sayi2+ x[i];
                    }
                    sayi1=Number(sayi1);
                    sayi2=Number(sayi2);
                    sonuc = sayi1/sayi2;
                }
                if (x.indexOf("*",0) != -1) {
                    operator="*";
                    for ( i = 0; i < x.indexOf("*",0); i++) {
                        sayi1=sayi1+ x[i];
                    }
                    for ( i = x.indexOf("*",0)+1; i < x.length; i++) {
                        sayi2=sayi2+ x[i];
                    }
                    sayi1=Number(sayi1);
                    sayi2=Number(sayi2);
                    sonuc = sayi1*sayi2;
                }
                document.getElementById("ekran").innerHTML=sonuc;
        });
});
