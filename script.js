(function() {
    emailjs.init("gxCdLkPbpeuC5CFQ4");
})();

// Таймер обратного отсчета
function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) timer = duration;
    }, 1000);
}

window.onload = function () {
    let twelveHours = 60 * 60 * 12;
    let display = document.querySelector('#timer');
    startTimer(twelveHours, display);
};

// Отправка формы
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.innerText = 'ОБРОБКА...';
    btn.disabled = true;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Дякуємо! Замовлення прийнято.');
            btn.innerText = 'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ';
            btn.disabled = false;
            event.target.reset();
        }, function(error) {
            alert('Помилка: ' + JSON.stringify(error));
            btn.innerText = 'ПОМИЛКА';
            btn.disabled = false;
        });
});
