// ## Задание

// Сверстать макет [psd](./The_Ham_Step_project.psd). Подключить динамические элементы (см. ниже)

// #### Технические требования к верстке:
// - Нужно сделать верстку только под широкоформатные мониторы, с шириной экрана 1200 пикселей или более (то есть ширина контента фиксированная в пикселях). Максимальная ширина контейнера с контентом - 1160 пикселей (кроме второго блока с квадратами). 
// - Фоновое изображение в шапке должно занимать всю доступную ширину экрана и не двигаться при скролле вниз.
// - Адаптивная верстка под разные разрешения экрана НЕ требуется.
// - Карточки в секции `Breaking news` должны быть кликабельными ссылками.
// - Секция `Gallery of best images` не обязательная для выполнения.

// #### Динамические элементы на странице:
// - Вкладки в секции `Our services` должны переключаться при нажатии мышью. Текст и картинки для других вкладок вставить любые.
// - Кнопка `Load more` в секции `Our amazing work` имитирует подгрузку с сервера новых картинок. При ее нажатии в секции снизу должно добавиться еще 12 картинок (изображения можно взять любые). После этого кнопка исчезает.
// - Кнопки на вкладке `Our amazing work` являются "фильтрами продукции". Предварительно каждой из картинок нужно присвоить одну из четырех категорий, на ваше усмотрение (на макете это `Graphic design`, `Web design`, `Landing pages`, `Wordpress`). При нажатии на кнопку категории необходимо показать только те картинки, которые относятся к данной категории. `All` показывает картинки из всех категорий. Категории можно переименовать, картинки для категорий взять любые.
// - Карусель на вкладке `What people say about theHam` должна быть рабочей, по клику как на иконку фотографии внизу, так и на стрелки вправо-влево. В карусели должна меняться как картинка, так и текст. Карусель обязательно должна быть с анимацией.
// - Для подключения динамических элементов можно использовать любые библиотеки - как jQuery/его плагины, так и чистый Javascript код.

// #### Не обязательные задания продвинутой сложности:
// - Кнопку `Load more` в секции `Our amazing work` можно нажать два раза, каждое нажатие добавляет 12 картинок снизу. То есть максимум в этой секции может быть расположено 36 картинок. После второго нажатия кнопка исчезает.
// - Сверстать также секцию `Gallery of best images`, расположить картинки внутри блока с помощью плагина [Masonry](https://masonry.desandro.com/).
// - Кнопка `Load more` в секции `Gallery of best images` также должна быть рабочей и добавлять порцию новых картинок на страницу.
// - При клике на каждую из кнопок `Load more` имитировать загрузку картинок с сервера. Показывать вместо кнопки или над ней две секунды CSS анимацию загрузки (можно написать самому или взять любой пример из интернета, например [здесь](https://freefrontend.com/css-loaders/) или [здесь](http://nisnom.com/preloadery-loader/)), и только после этого добавлять картинки на страницу.
// - Разместить проект в интернете с помощью [Github pages](https://pages.github.com/) или [Gitlab pages](https://docs.gitlab.com/ee/user/project/pages/) (не забудьте потом добавить ссылку в резюме).

// Для удобства все картинки с макета размещены в [архиве](./Step%20Project%20Ham%20Pictures.zip).

// #### Удачи!
// ___________________slick_________________
//   $('.sl').slick({
//     dots:true,
//     fade:true,
//     dotsClass: 'slick-dots slider__dots',
//   customPaging: function(slick, index) {
//     var image = $(slick.$slides[index]).find('.slider__img').attr('src');
//     // return'<img src="' + image + '" alt="" /> '
//     return '<img class="sl__img" src="./img/people/person1.png" alt="">'
//   },

// });

// ________________________1th-tabs-js____________________________________

window.onload = function () {
  document.querySelector('.services-tabs-container').addEventListener('click', fTabs);

  function fTabs(event) {
    console.log(event);
    if (event.target.className = 'services-tabs') {
      const dataTab = event.target.getAttribute('data-tab');
      const servicesItem = document.getElementsByClassName('services-item')
      for (let i = 0; i < servicesItem.length; i++) {
        if (dataTab == i) {
          servicesItem[i].style.display = 'flex';
        } else {
          servicesItem[i].style.display = 'none';
        }
      }
    }
  }
}

// ________________________2th-tabs-js___________________________________

var jsTriggers = document.querySelectorAll('.js-tab-trigger');
var jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(trigger => {
  trigger.addEventListener('click', onTabClick);
});

function onTabClick(event) {
  var tabId = event.target.dataset.tab;

  if (tabId == 'All') {
    jsContents.forEach(function (item) {
      item.classList.add('active');
    });
  } else {
    jsContents.forEach(function (item) {
      item.classList.remove('active');
    });
  }
  var contentToDisplay = document.querySelectorAll(`.js-tab-content[data-tab="${tabId}"]`);
  contentToDisplay.forEach(function (item) {
    item.classList.add('active');
  });
}

// ____________________slider-js_____________________________


const hamTabsDots = document.querySelector('.ham-tabs-dots');
const tabsDots = document.querySelectorAll('.tab-dot');
const nextBtn = document.getElementById('next');


hamTabsDots.addEventListener('click', (e) => {
  if (event.target.classList.contains('tab-dot')) {
    currentElem(e.target);
  } else if (event.target.id === 'prev') {
    const currentActiveTab = +document.querySelector('.tab-dot.active').dataset.tab;
    const elemsQuant = document.querySelectorAll('.tab-dot').length;
    const nextActiveTab = (currentActiveTab === 1) ? elemsQuant : currentActiveTab - 1;
    const nextActiveElem = document.querySelectorAll('.tab-dot')[nextActiveTab - 1]
    currentElem(nextActiveElem);

  } else if (event.target.id === 'next') {
    const currentActiveTab = +document.querySelector('.tab-dot.active').dataset.tab;
    const elemsQuant = document.querySelectorAll('.tab-dot').length;
    const nextActiveTab = (currentActiveTab === elemsQuant) ? 1 : currentActiveTab + 1;
    const nextActiveElem = document.querySelectorAll('.tab-dot')[nextActiveTab - 1]
    currentElem(nextActiveElem);
  }
});

function currentElem(currentTab) {
  const tabsDots = document.querySelectorAll('.tab-dot');
  tabsDots.forEach(function (circle) {
    circle.classList.remove('active');
  });
  currentTab.classList.add('active');
  let currentTabId = currentTab.dataset.tab;

  const hamItems = document.querySelectorAll('.ham-item');
  for (let item of hamItems) {
    if (currentTabId === item.dataset.tab) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    };
  }
 }






