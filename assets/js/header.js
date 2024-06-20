/*JS для шапки сайта*/

// Появление вопроса о городе при загрузке
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.question-town').classList.add('show');
    }, 100);

    // Обработчики событий для кнопок "Да" и "Нет"
    document.querySelector('.btn-black.yes').addEventListener('click', function () {
        document.querySelector('.question-town').style.display = 'none';
    });

    document.querySelector('.btn-transparent.no').addEventListener('click', function () {
        document.querySelector('.question-town').style.display = 'none';
    });
});

//Работа с модальным окном
const cityLinks = document.querySelectorAll('.city-link');

cityLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        const cityName = this.textContent.trim();

        // Обновляем текст кнопки
        const selectTownButton = document.querySelector('.select-town');
        selectTownButton.textContent = `г.${cityName}`;

        // Закрываем модальное окно
        const modalElement = document.getElementById('staticBackdrop');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    });
});



//Активная навигация
arrNavItem = Array.from(document.querySelectorAll('.nav-link'));
arrNavItem.forEach(function (item) {
    item.addEventListener('click', function () {
        arrNavItem.forEach(function (navItem) {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});