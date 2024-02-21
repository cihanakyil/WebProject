function sil(d){
                var sinif_ismi = ".sikayet" + d ;
                $(sinif_ismi).remove();
                alert("BAŞARIYLA SİLİNDİ.");
}


function ekle(sayac){
                      var baslik =$("#baslik").val();
                      var firma_adi = $("#firma_adi").val();
                      var sikayet_tarihi = $("#sikayet_tarihi").val();
                      var sikayet_icerik = $("#sikayet_icerik").val();
                      var y = "<div class='col-sm-4 sikayet"+sayac+"'"+">" +
                      "<table border='2' style='width:100%'>" +
                      "<tr style='height:30px'>" +
                      "<td colspan='2'><strong><input type='text' class='form-control sikayet"+sayac+"' style='text-align:center' name='' value='"+baslik+"' placeholder='ŞİKAYET BAŞLIĞI"+sayac+"'"+"disabled></strong></td>" +
                      "</tr>"+
                      "<tr>"+
                      "<td style='width:60% ; text-align:center'><strong><input type='text' class='form-control sikayet"+sayac+"' style='text-align:center' name='' value='"+firma_adi+"' placeholder='FİRMA ADI' disabled></strong></td>" +
                      "<td style='text-align:right'><strong><input type='date' class='form-control sikayet"+sayac+"' style='text-align:center' name='' value='"+sikayet_tarihi+"' placeholder='ŞİKAYET TARİHİ' disabled></strong></td>" +
                      "</tr>" +
                      "<tr>" +
                      "<td  colspan='2' style='text-align:center'><strong>ŞİKAYET DETAYI</strong></td>"+
                      "</tr>"+
                      "<tr>"+
                      "<td colspan='2'><textarea class='form-control sikayet"+sayac+"' name='name' rows='12' cols='50' disabled>"+sikayet_icerik+"</textarea></td>"+
                      "</tr>"+
                      "<td><strong style='text-align:left'>ŞİKAYET DURUMU</strong></td>"+
                      "<th>CEVAPLANMADI</th>"+
                      "</table>"+
                      "<div class='btn-group'>"+
                      "<button type='button' name='button' id='sikayet"+sayac+"_sil' class='btn btn-danger' onclick='sil("+sayac+")'>SİL</button>"+
                      "<button type='button' name='button' id='sikayet"+sayac+"_guncelle' class='btn btn-primary' onclick='guncelle("+sayac+")'>GÜNCELLE</button>" +
                      "<button type='button' name='button' id='sikayet"+sayac+"_kaydet' class='btn btn-warning' onclick='guncelle_kaydet("+sayac+")' disabled>KAYDET</button>" +
                      "</div>"+
                      "</div>" ;

                      $(".sikayetler").append(y);
}

function guncelle(e){
  var sinif_ismi = ".sikayet" + e ;
  var buton_ismi = "#sikayet" + e ;
  var guncelle_class = buton_ismi +"_guncelle";
  var kaydet_class = buton_ismi +"_kaydet";
      $(sinif_ismi).prop('disabled', false);
      $(kaydet_class).prop('disabled', false);
      $(guncelle_class).prop('disabled', true);
}

function guncelle_kaydet(f){
  var sinif_ismi = ".sikayet" + f ;
  var buton_ismi = "#sikayet" + f ;
  var guncelle_class = buton_ismi +"_guncelle";
  var kaydet_class = buton_ismi +"_kaydet";
  $(sinif_ismi).prop('disabled', true);
  $(kaydet_class).prop('disabled', true);
  $(guncelle_class).prop('disabled', false);

  alert("BAŞARIYLA GÜNCELLENDİ");
}

var sikayet_sayac = 3;
$(document).ready(function(){
                              $("#sikayet1_sil").click(function(){
                                      sil(1);
                              });
                              $("#sikayet2_sil").click(function(){
                                      sil(2);
                              });
                              $("#sikayet3_sil").click(function(){
                                      sil(3);
                              });

                              $("#sikayet_ekle").click(function(){
                                      sikayet_sayac = sikayet_sayac + 1 ;
                                      ekle(sikayet_sayac);
                                      alert("BAŞARIYLA EKLENDİ");
                              });

                              $("#sikayet1_guncelle").click(function(){
                                  guncelle(1);

                              });
                              $("#sikayet2_guncelle").click(function(){
                                guncelle(2);


                              });
                              $("#sikayet3_guncelle").click(function(){
                                  guncelle(3);

                              });

                              $("#sikayet1_kaydet").click(function(){
                                  guncelle_kaydet(1);

                              });

                              $("#sikayet2_kaydet").click(function(){
                                  guncelle_kaydet(2);

                              });

                              $("#sikayet3_kaydet").click(function(){
                                  guncelle_kaydet(3);

                              });
});
