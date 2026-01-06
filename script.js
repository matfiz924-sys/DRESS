(function() {
    emailjs.init("gxCdLkPbpeuC5CFQ4");
})();

document.addEventListener("DOMContentLoaded", () => {
    // 1. Таймер 12 годин
    const timerEl = document.querySelector('#timer');
    let timeLeft = 12 * 60 * 60;

    function updateTimer() {
        let h = Math.floor(timeLeft / 3600);
        let m = Math.floor((timeLeft % 3600) / 60);
        let s = timeLeft % 60;
        timerEl.textContent = `${h < 10 ? '0'+h : h}:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
        if (timeLeft > 0) timeLeft--;
    }
    setInterval(updateTimer, 1000);

    // 2. Галерея та вибір кольору
    const colorSpans = document.querySelectorAll(".colors span");
    const photo1 = document.getElementById("img-main-1");
    const photo2 = document.getElementById("img-main-2");
    const formColorSelect = document.getElementById("form-color");
    let activeColorName = "";

    colorSpans.forEach(span => {
        span.addEventListener("click", function() {
            activeColorName = this.getAttribute("data-color");
            photo1.src = this.getAttribute("data-img1");
            photo2.src = this.getAttribute("data-img2");
            
            colorSpans.forEach(s => s.style.borderColor = "transparent");
            this.style.borderColor = "#ff5a6e";
            
            formColorSelect.value = activeColorName; // Автозаповнення кольору у формі
        });
    });

    // 3. Модальне вікно
    const overlay = document.getElementById('modal-overlay');
    const modelName = document.getElementById('model-name').textContent;
    const formModelInput = document.getElementById('form-model');

    document.querySelectorAll('.open-modal').forEach(btn => {
        btn.onclick = () => {
            overlay.style.display = 'flex';
            formModelInput.value = modelName; // Автозаповнення моделі
        };
    });

    document.querySelector('.close-modal').onclick = () => overlay.style.display = 'none';
    window.onclick = (e) => { if (e.target == overlay) overlay.style.display = 'none'; };

    // 4. Відправка форми (EmailJS)
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        btn.innerText = 'ОБРОБКА...';
        btn.disabled = true;

        // ЗАМІНИ ЦІ ID НА СВОЇ!
        const serviceID = 'YOUR_SERVICE_ID'; 
        const templateID = 'YOUR_TEMPLATE_ID';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Дякуємо за замовлення! Ми з вами зв’яжемося.');
                overlay.style.display = 'none';
                orderForm.reset();
                btn.innerText = 'ПІДТВЕРДИТИ';
                btn.disabled = false;
            }, (err) => {
                alert('Помилка! Перевірте Service ID у script.js');
                btn.innerText = 'ПОМИЛКА';
                btn.disabled = false;
            });
    });
});

// Найди блок, где была логика выбора цвета, и замени на этот код:

    const colorSpans = document.querySelectorAll(".colors span");
    const photo1 = document.getElementById("img-main-1");
    const photo2 = document.getElementById("img-main-2");
    const formColorSelect = document.getElementById("form-color");

    colorSpans.forEach(span => {
        span.addEventListener("click", function() {
            // 1. Управляем внешним видом кружочков
            colorSpans.forEach(s => s.classList.remove("active"));
            this.classList.add("active");

            // 2. Получаем ссылки на новые фото
            const newImg1 = this.getAttribute("data-img1");
            const newImg2 = this.getAttribute("data-img2");
            const colorName = this.getAttribute("data-color");

            // 3. Плавная смена фото через прозрачность
            photo1.style.opacity = "0";
            photo2.style.opacity = "0";

            setTimeout(() => {
                photo1.src = newImg1;
                photo2.src = newImg2;
                
                // Возвращаем видимость после смены источника
                photo1.style.opacity = "1";
                photo2.style.opacity = "1";
            }, 400); // 400мс — время пока картинка "скрыта"

            // 4. Передаем данные в форму
            if (formColorSelect) {
                formColorSelect.value = colorName;
            }
        });
    });
