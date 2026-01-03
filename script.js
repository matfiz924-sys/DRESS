(function() {
    emailjs.init("gxCdLkPbpeuC5CFQ4");
})();

// Таймер (12 годин)
function startTimer(duration, display) {
    let timer = duration;
    setInterval(function () {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = Math.floor(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) timer = duration;
    }, 1000);
}

window.onload = function () {
    let time = 60 * 60 * 12; // 12 годин
    startTimer(time, document.querySelector('#timer'));
};

// Відправка
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.innerText = 'ОБРОБКА...';
    btn.disabled = true;

    // ВСТАВ СВОЇ ID
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Замовлення прийнято! Менеджер зателефонує вам.');
            btn.innerText = 'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ';
            btn.disabled = false;
            event.target.reset();
        }, function(error) {
            alert('Помилка: ' + JSON.stringify(error));
            btn.innerText = 'ПОМИЛКА';
            btn.disabled = false;
        });
});
