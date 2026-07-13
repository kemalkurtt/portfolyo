const temaButonu = document.getElementById('tema-butonu');

temaButonu.addEventListener('click', () => {
    document.body.classList.toggle('karanlik-tema');
    
    if (document.body.classList.contains('karanlik-tema')) {
        temaButonu.textContent = '☀️';
    } else {
        temaButonu.textContent = '🌙';
    }
});