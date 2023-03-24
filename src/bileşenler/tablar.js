
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  import axios from "axios";
  const Tablar = (konu) => {
    const tdiv = document.createElement("div");
    tdiv.classList.add("topics");
    const java = document.createElement("div");
    java.classList.add("tab");
    java.textContent = konu.konular[0];
    const boost = document.createElement("div");
    boost.classList.add("tab");
    boost.textContent = konu.konular[1];
    const tekno = document.createElement("div");
    tekno.classList.add("tab");
    tekno.textContent = konu.konular[2];
    tdiv.append(java, boost, tekno);
    return tdiv; 
  };

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  
  
  axios.get("http://localhost:5001/api/konular")
    .then((response) => {
      console.log(response);
      const konu = response.data;
      const tdiv = Tablar(konu); 
      const secilenElem = document.querySelector(secici);
      secilenElem.appendChild(tdiv); 
    });
}

export { Tablar, tabEkleyici }
