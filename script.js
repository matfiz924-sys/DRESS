(function() {
    emailjs.init("gxCdLkPbpeuC5CFQ4");
})();

document.addEventListener("DOMContentLoaded", () => {
    // 1. Логика таймера (Пункт 4)
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

    let time = 60 * 60 * 12; // 12 часов
    startTimer(time, document.querySelector('#timer'));

    // 2. Модальное окно (Пункт 2)
    const overlay = document.getElementById('modal-overlay');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.querySelector('.close-modal');

    openBtns.forEach(btn => {
        btn.onclick = () => overlay.style.display = 'flex';
    });

    closeBtn.onclick = () => overlay.style.display = 'none';
    window.onclick = (e) => { if (e.target == overlay) overlay.style.display = 'none'; };

    // 3. Выбор цвета (визуальный эффект)
    const colors = document.querySelectorAll(".colors span");
    colors.forEach(color => {
        color.addEventListener("click", () => {
            colors.forEach(c => c.style.outline = "none");
            color.style.outline = "2px solid #ff5a6e";
        });
    });

    // 4. Отправка через EmailJS (Пункт 3)
    document.getElementById('order-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const btn = document.getElementById('submit-btn');
        btn.innerText = 'ОБРОБКА...';
        btn.disabled = true;

        // ВСТАВЬ СВОИ ID ВМЕСТО ЭТИХ:
        emailjs.sendForm('service_x69oyyx', 'template_55bzoo1', this)
            .then(function() {
                // Красивое завершение
                overlay.style.display = 'none'; // Закрываем форму
                alert('Дякуємо за замовлення! Ми з вами зв’яжемося найближчим часом.');
                btn.innerText = 'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ';
                btn.disabled = false;
                event.target.reset();
            }, function(error) {
                alert('Помилка: ' + JSON.stringify(error));
                btn.innerText = 'ПОМИЛКА';
                btn.disabled = false;
            });
    });
});
