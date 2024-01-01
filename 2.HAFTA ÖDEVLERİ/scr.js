function resimleriCek() {
    // Kullanıcının girdiği kategori değerini alıyoruz.
    var girKategori = document.getElementById("kategoriInput").value;

    // Unsplash API linkini oluşturuyoruz.
    var unsplashLink = `https://source.unsplash.com/random/330x330/?${girKategori}`;

    // Resimler alanını temizleyelim ki ardışık aramalarda alan boş olsun.
    document.getElementById("resimlerAlani").innerHTML = " ";

    // 9 adet resim çekelim.
    for (var i = 0; i < 9; i++) {
    // Resim elementini oluşturalım.
    var resimElementi = document.createElement("img");
    resimElementi.src = `${unsplashLink}&${i}`;

    // Resim kutusunu oluşturalım.
    var resimKutusu = document.createElement("div");
    resimKutusu.className = "resimKutusu";
    resimKutusu.appendChild(resimElementi);

    // Resimleri alanına ekleyelim.
    document.getElementById("resimlerAlani").appendChild(resimKutusu);
    }
}     

