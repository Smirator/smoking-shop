//увеличение количества и стоимости товара
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(function (card) {
        const priceElement = card.querySelector('.price');
        const quantityElement = card.querySelector('.quantity');
        const incrementButton = card.querySelector('.increment');
        const decrementButton = card.querySelector('.decrement');
        const basePrice = parseFloat(priceElement.textContent.replace('₽', '').replace(' ', ''));

        function updatePriceAndQuantity(change) {
            let quantity = parseInt(quantityElement.textContent);
            quantity += change;
            if (quantity < 1) {
                quantity = 1;
            }
            quantityElement.textContent = quantity;

            const newPrice = basePrice * quantity;
            priceElement.textContent = newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + '₽';
        }

        incrementButton.addEventListener('click', function () {
            updatePriceAndQuantity(1);
        });

        decrementButton.addEventListener('click', function () {
            updatePriceAndQuantity(-1);
        });
    });
});

//эффект приближения при наведении
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.wrapper-img-product').forEach(function (wrapper) {
        let hoverBody = wrapper.querySelector('.hover-body');

        wrapper.addEventListener('mouseover', function () {
            hoverBody.classList.remove('d-none');
            wrapper.querySelector('img').classList.add('zoom');
            wrapper.classList.add('active-product');
        });

        wrapper.addEventListener('mouseout', function () {
            hoverBody.classList.add('d-none');
            wrapper.querySelector('img').classList.remove('zoom');
            wrapper.classList.remove('active-product');
        });
    });
});

//Активная сортировка
arrBtnItem = Array.from(document.querySelectorAll('.sorting-btn'));
arrBtnItem.forEach(function (item) {
    item.addEventListener('click', function () {
        arrBtnItem.forEach(function (navItem) {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});



//активное изменение отображения элементов
document.addEventListener('DOMContentLoaded', function () {
    // HEX цвета
    const greenColor = '#96c361';
    const grayColor = '#dadada';

    // Получаем ссылки на SVG элементы по классу
    const svgs = document.querySelectorAll('.el-display');

    // Обработчики клика для каждого SVG
    svgs.forEach(svg => {
        svg.addEventListener('click', function () {
            // Сбрасываем все SVG в серый цвет и убираем класс 'active'
            svgs.forEach(svg => {
                svg.setAttribute('fill', grayColor);
                svg.classList.remove('active');
            });

            // Отмечаем текущий SVG как активный и красим его в зеленый
            this.setAttribute('fill', greenColor);
            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const dropDownLists = document.querySelectorAll('.el-drop-down'); // Получаем все элементы с классом .el-drop-down

    dropDownLists.forEach((el) => {
        const dropDownContent = el.querySelector('.drop-down-content');
        const itemCount = el.querySelector('.item-count');
        const arrowIcon = el.querySelector('.arrow-icon');
        const dropDownList = el.querySelector('.drop-down-list');

        if (!dropDownContent || !itemCount || !arrowIcon || !dropDownList) {
            console.error('Required elements are missing in the drop-down list item');
            return;
        }

        const updateItemCount = () => {
            const count = dropDownContent.querySelectorAll('p').length;
            itemCount.textContent = `(${count})`;
        };

        updateItemCount();

        dropDownList.addEventListener('click', () => {
            if (dropDownContent.classList.contains('show')) {
                dropDownContent.classList.remove('show');
                arrowIcon.style.transform = 'rotate(0deg)';
            } else {
                dropDownContent.classList.add('show');
                arrowIcon.style.transform = 'rotate(180deg)';
            }
        });

        dropDownContent.querySelectorAll('p').forEach(item => {
            item.addEventListener('click', (event) => {
                event.stopPropagation();
                item.classList.toggle('drop-down-el-active');
            });
        });
    });
});



//range - ползунок с ценой
var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
    start: [100, 15000],
    connect: true,
    range: {
        'min': 100,
        'max': 15000
    },
    tooltips: true
});

var minValue = document.getElementById('slider-min');
var maxValue = document.getElementById('slider-max');

slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];
    if (handle === 0) {
        minValue.innerHTML = value;
    } else {
        maxValue.innerHTML = value;
    }
});


//Выбор отображения товаров: сетка или список
document.addEventListener('DOMContentLoaded', function () {
    var svgElements = document.querySelectorAll('.el-display');
    var activeElement = null;

    svgElements.forEach(function (svg) {
        svg.addEventListener('click', function () {
            if (activeElement) {
                activeElement.querySelectorAll('rect').forEach(function (rect) {
                    rect.setAttribute('fill', '#dadada');
                });
            }
            svg.querySelectorAll('rect').forEach(function (rect) {
                rect.setAttribute('fill', 'rgba(150, 195, 97, 1)');
            });
            activeElement = svg;
        });
    });
});