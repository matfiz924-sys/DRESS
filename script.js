// Инициализация EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Замените на ваш из EmailJS
})();

// Обработка формы
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'ВІДПРАВКА...';
    btn.disabled = true;

    // Параметры: service_id, template_id
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Дякуємо! Замовлення прийнято.');
            btn.innerText = 'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ';
            btn.disabled = false;
            event.target.reset();
        }, function(error) {
            alert('Помилка: ' + JSON.stringify(error));
            btn.disabled = false;
        });
});

// Простой таймер
function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        display.textContent = 
            (hours < 10 ? "0" + hours : hours) + ":" + 
            (minutes < 10 ? "0" + minutes : minutes) + ":" + 
            (seconds < 10 ? "0" + seconds : seconds);

        if (--timer < 0) timer = duration;
    }, 1000);
}

window.onload = function () {
    let time = 3600 * 2; // 2 часа
    startTimer(time, document.querySelector('#countdown'));
};
