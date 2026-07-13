const temaButonu = document.getElementById('tema-butonu');

temaButonu.addEventListener('click', () => {
    document.body.classList.toggle('karanlik-tema');
    
    if (document.body.classList.contains('karanlik-tema')) {
        temaButonu.textContent = '☀️';
    } else {
        temaButonu.textContent = '🌙';
    }
});
const iletisimFormu = document.getElementById('iletisim-formu');

iletisimFormu.addEventListener('submit', (e) => {
    e.preventDefault(); // Butona basınca sayfanın yenilenmesini engeller
    alert('Mesajınız başarıyla gönderildi! (Bu şu anlık bir test bildirimidir)');
    iletisimFormu.reset(); // Gönderdikten sonra formun içini tertemiz yapar
});
// Sayfa kaydırıldıkça öğeleri yakalayacak gözlemci
const gozlemci = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('goster');
        }
    });
});

// Sitedeki tüm "gizli" sınıfına sahip öğeleri bul ve gözlemlemeye başla
const gizliOgeler = document.querySelectorAll('.gizli');
gizliOgeler.forEach((oge) => gozlemci.observe(oge));