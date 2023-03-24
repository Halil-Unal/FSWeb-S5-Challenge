//const news =document.getElementsByClassName("header-container")
const Header = (baslikMetni, tarihMetni, yaziMetni) => {
  const hdiv = document.createElement("div");
  hdiv.classList.add("header");

  const tarih = document.createElement("span");
  tarih.classList.add("date");
  tarih.textContent = tarihMetni;
  hdiv.appendChild(tarih);

  const baslik = document.createElement("h1");
  baslik.textContent = baslikMetni;
  hdiv.appendChild(baslik);

  const yazi = document.createElement("span");
  yazi.classList.add("temp");
  yazi.textContent = yaziMetni;
  hdiv.appendChild(yazi);

  return hdiv;
};

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //


const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const header = Header("TEKNOLOJİ ZAMANI", "11 KASIM 2022", "sağdaki yazı");

  const seciliElement = document.querySelector(secici);
  seciliElement.appendChild(header);
};


export { Header, headerEkleyici }
