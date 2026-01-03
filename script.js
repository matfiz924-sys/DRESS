(function() {
    emailjs.init("gxCdLkPbpeuC5CFQ4"); // Береш в Account
})();

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'ВІДПРАВКА...';
    btn.disabled = true;

    // Встав свої ID сервісу та шаблону
    emailjs.sendForm('service_x69oyyx', 'template_55bzoo1', this)
        .then(function() {
            alert('Дякуємо! Замовлення прийнято. Ми скоро зателефонуємо!');
            btn.innerText = 'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ';
            btn.disabled = false;
            event.target.reset();
        }, function(error) {
            alert('Помилка: ' + JSON.stringify(error));
            btn.innerText = 'ПОМИЛКА';
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
