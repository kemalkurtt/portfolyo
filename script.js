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