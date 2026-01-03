(function() {
    emailjs.init("gxCdLkPbpeuC5CFQ4");
})();

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'ОБРОБКА...';
    btn.disabled = true;

    // ВСТАВЬ СВОИ ДАННЫЕ СЮДА
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Дякуємо! Ваше замовлення прийнято. Ми зателефонуємо вам найближчим часом.');
            btn.innerText = 'ОФОРМИТИ ЗАМОВЛЕННЯ';
            btn.disabled = false;
            event.target.reset();
        }, function(error) {
            alert('Помилка: ' + JSON.stringify(error));
            btn.innerText = 'ПОМИЛКА';
            btn.disabled = false;
        });
});
