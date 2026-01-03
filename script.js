(function() {
    // Твой ключ без лишних пробелов
    emailjs.init("gxCdLkPbpeuC5CFQ4");
})();

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'Відправка...';
    btn.disabled = true;

    // ВНИМАНИЕ: Проверь эти два ID в своей панели EmailJS!
    // Первый — из раздела Email Services, второй — из Email Templates
    const serviceID = 'service_x69oyyx'; 
    const templateID = 'template_55bzoo1';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Дякуємо! Замовлення прийнято.');
            btn.innerText = 'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ';
            btn.disabled = false;
            event.target.reset();
        }, function(error) {
            // Если ошибка останется, она выведет подробности в консоль
            console.log("FAILED...", error);
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
