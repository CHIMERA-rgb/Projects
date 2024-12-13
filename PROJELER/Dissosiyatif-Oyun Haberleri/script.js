const header = document.querySelector('header');
const header_title = document.getElementById('header_title');
const header_description = document.querySelector('header p');
const d_btn1 = document.getElementById('d_btn1');
const d_btn2 = document.getElementById('d_btn2');
const slider_btn = document.querySelectorAll('.dot');

const backimg = {
    fimg: 'img/mirage.jpeg',
    simg: 'img/wukong.jpg',
    timg: 'img/persia.jpeg'
};

const links = [
    "https://www.ubisoft.com/en-gb/game/assassins-creed/mirage",
    "https://store.epicgames.com/tr/p/black-myth-wukong-87a72b",
    "https://store.ubisoft.com/tr/prince-of-persia-the-lost-crown/6408bd687ee83d203cf3bda1.html"
];

const slider_load = (index) => {
    const images = [backimg.fimg, backimg.simg, backimg.timg];
    const titles = ["STEAM'E GELİYOR", "XBOX SÜRÜMÜ ORTAYA ÇIKTI", "DEVAM OYUNU İPTAL EDİLDİ"];
    const descriptions = [
        "2023’te Ubisoft Connect ve Epic Games Store aracılığıyla bilgisayar için piyasaya sürülen Assassin’s Creed Mirage, Ekim 2024’te Steam platformuna da eklenecek. Böylece oyunculara satın almak için bir seçenek daha sunulacak.Assassin’s Creed Mirage, Ubisoft Connect ve Epic Games Store’da 849 TL’lik fiyatla satışa sunulmuş durumda. Ancak oyunun Steam platformundaki fiyatı henüz açıklanmadı. Valve’ın sahibi olduğu oyun mağazası geçen yıl Türk Lirası desteğini kaldırdı. Bu yüzden oyun Steam’de dolar üzerinden satılacak ve fiyat, döviz kuruna göre belirlenecek.Assassin’s Creed Mirage fiyatı yurt dışında 49.99 dolar olduğuna göre Steam’de bin 700 TL civarında bir fiyatla satışa çıkabilir. Tabii firmanın ülkemize özel bir düzenleme yapması durumunda daha düşük bir rakamla da karşılaşabiliriz.",
        "Çin mitolojisinden ilham alan Black Myth: Wukong, 20 Ağustos tarihinde PlayStation 5 ve PC platformlarına çıkmıştı ancak ne yazık ki oyunun Xbox Series X ve S sürümü satışa sunulmamıştı. Kısa sürede çok popüler hâle gelen ve büyük beğeni toplayan oyunun Xbox konsollarına çıkmaması tepkiye yol açmıştı. Black Myth: Wukong'un teknik kısıtlamalara takıldığı ve geliştiricilerin oyunu düşük donanıma optimize etmekte zorlandığı öne sürülmüştü fakat Microsoft, oyunun Xbox Series X ve S sürümü için geliştirici şirket ile aktif şekilde çalıştıklarını ve gecikmenin donanımdan kaynaklanmadığını söylemişti.Xbox Series X/S konsollarına sahip olan oyuncuları sevindirecek bir gelişme yaşandı. Aksiyon rol yapma türündeki oyunun Xbox sürümü ESRB'de derecelendirildi. Bu, oyunun çok yakında Xbox Series X/S konsollarına piyasaya sürüleceğini gösteriyor.",
        "Oyun dünyasının ikonik serilerinden Prince of Persia , zorlu bir dönemden geçiyor. Serinin son yapımı The Lost Crown , Ubisoft'ta olumlu tepkiler almış olsa da, beklenmedik bir karara imza atarak devam oyununu iptal etti. Prince of Persia serisinin sonu gelmiş olabilir. Son iddialara göre, Ubisoft piyasaya sürülen aylarda Prince of Persia: The Lost Crown'un devam oyunu iptal etti. Şirketin, The Lost Crown'u geliştiren departmanın kapatıldığı bildirildi. 2.5D oynanışıyla büyük övgü toplayan The Lost Crown, gelişme süreci boyunca olumlu bir geri dönüş aldı. Ancak oyun satışları, Ubisoft'un beklentilerini karşılayamadı. Bu durum, şirketin ek içerik (DLC) ve devam oyunu üretme planlarını rafa kaldırmasına neden oldu. Daha da ilginç olanı, Ubisoft'un devam oyununun ilk yapımı satışlarını olumsuz güçlerin olacağından endişelendiğinden dair bilgiler ortaya çıktı. Geliştirme ekibinin dağılması, The Lost Crown'un yeniden başlayan hikayesinin devam etmesi anlamına geliyor. Bu iptal, bir yıllık periyod içinde olan Prince of Persia serisi için yeni bir darbe olarak değerlendiriliyor. İlk olarak 2020'de duyurulan The Sands of Time remake'inin süresinin ertelendiği ve yeni bir geliştirme ile başlamaya başladığı bilgisi dikkat çekiyor. Öte yandan, Ubisoft'un kurucu ailesi Guillemot , şirketin değerini korumak ve istikrarı sağlamak için çeşitli seçenekleri değerlendirmeye başladı. Bloomberg'in haberine göre aile sahibi olduğu ve Ubisoft'ta yüzde 20 hisseye sahip olan Guillemot Brothers Ltd , danışmanlarla görüşmelere başladı."
    ];

    header.style.background = `url(${images[index]}) no-repeat center center/cover`;
    header_title.innerText = titles[index];
    header_description.innerText = descriptions[index];

    slider_btn.forEach((btn, i) => {
        btn.style.background = i === index ? "#fff" : "rgb(184,184,184,0.1)";
    });

    d_btn1.href = links[index];
    d_btn1.target = "_blank";
    d_btn2.href = links[index];
    d_btn2.target = "_blank";
};

let currentIndex = 0;

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slider_btn.length;
    slider_load(currentIndex);
};

slider_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        slider_load(currentIndex);
    });
});

setInterval(nextSlide, 10000);
slider_load(currentIndex);
