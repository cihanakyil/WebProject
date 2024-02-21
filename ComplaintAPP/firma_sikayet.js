function cevapla(c){
  var sinif_ismi = ".sikayet" + c ;
  var buton_ismi = "#sikayet" + c ;
  var guncelle_class = buton_ismi +"_cevapla";
  var kaydet_class = buton_ismi +"_kaydet";
      $(buton_ismi).prop('disabled', false);
      $(kaydet_class).prop('disabled', false);
      $(guncelle_class).prop('disabled', true);
}

$(document).ready(function(){
                              $("#sikayet1_cevapla").click(function(){
                                $(".sikayet1").prop('disabled', false);
                                $("#sikayet1_kaydet").prop('disabled', false);
                                $("#sikayet1_cevapla").prop('disabled', true);

                              });

                              $("#sikayet2_cevapla").click(function(){
                                $(".sikayet2").prop('disabled', false);
                                $("#sikayet2_kaydet").prop('disabled', false);
                                $("#sikayet2_cevapla").prop('disabled', true);

                              });

                              $("#sikayet3_cevapla").click(function(){
                                $(".sikayet3").prop('disabled', false);
                                $("#sikayet3_kaydet").prop('disabled', false);
                                $("#sikayet3_cevapla").prop('disabled', true);

                              });

                              $("#sikayet1_kaydet").click(function(){
                                $(".sikayet1").prop('disabled', true);
                                $("#sikayet1_kaydet").prop('disabled', true);
                                $("#sikayet1_cevapla").prop('disabled', false);
                                
                              });

                              $("#sikayet2_kaydet").click(function(){
                                $(".sikayet2").prop('disabled', true);
                                $("#sikayet2_kaydet").prop('disabled', true);
                                $("#sikayet2_cevapla").prop('disabled', false);

                              });

                              $("#sikayet3_kaydet").click(function(){
                                $(".sikayet3").prop('disabled', true);
                                $("#sikayet3_kaydet").prop('disabled', true);
                                $("#sikayet3_cevapla").prop('disabled', false);

                              });


});
