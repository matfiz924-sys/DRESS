document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.getElementById("orderBtn");

  orderBtn.addEventListener("click", () => {
    alert("Дякуємо! Менеджер зв'яжеться з вами найближчим часом.");
  });

  const colors = document.querySelectorAll(".colors span");

  colors.forEach(color => {
    color.addEventListener("click", () => {
      colors.forEach(c => c.style.outline = "none");
      color.style.outline = "2px solid #ff5a6e";
    });
  });
});
