const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = '🌙'; // Тёмная тема
    } else {
        themeIcon.textContent = '☀️'; // Светлая тема
    }
});


const backToTopButton = document.getElementById('back-to-top');

// Показывать кнопку, если пользователь прокрутил страницу вниз на 100px
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Обработчик клика на кнопку
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Плавный скроллинг
    });
});
