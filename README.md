<!-- // ДЗ 2
Реализовать табы с названиями ресторанов.
По клику на таб отображается ресторан этого таба, дефолтно активен первый таб
В ресторане отображаем инфу о ресторана: название, меню, отзывы.
Меню состоит из блюд, каждое блюдо отображает название и кнопки - и +. Между кнопками отображаем кол-во блюда в заказе, дефолтно 0, при клике на кнопки значение меняется на единицу. 0 минимальное, 5 максимальное.
В отзывах отображаем просто список отзывов. каждый отзыв: имя и текст.
Делаем в отдельной ветке: lecture-2/hw
ссылку на пр отправляем в ветку в чате "Домашние задание 2" (см конец лекции, там подробное объяснение дз и способа отправки.) Если возникли вопросы пишите в ЛС Дискорда -->

<!-- //ДЗ 3
Добавить ключи для массивов
Добавить стили:

Должна быть стики шапка (см пример на лекции)
обычный футер
Кнопки табов больше кнопок добавления в заказ
Кнопка задизейбленная и нет имеют разные цвета
Активный таб выделен цветом -->

<!-- // ДЗ 4
Сделать темы:
В шапке кнокпка переключения темы
При переключении все кнопки в проекте меняют цвет(цвет любой)
Используем контекст

Форма отзыва:
После всех отзывов рисуем форму
3 поля: Имя, Текст, Рейтинг
Кнопка сохранить. По клику на нее форма чистится.
useReducer
Доп задание. Открывать форму в модалке:
Читаем про порталы: https://react.dev/reference/react-dom/createPortal
Вместо формы после отзывов рисуем кнопку открытия модалки.
В модалке рисуем форму отзыва и 2 кнопки: сохранить и отменить, по клик на них закрываем модалку -->

// ДЗ 5
Выполнить правки после разбора.

// ДЗ 6
Скопировать в проект normalized-mock.js
Установить @reduxjs/toolkit, react-redux
Создать стор и подключить к проекту
Создать для каждой сущности(рестораны, блюда, отзывы, пользователи) модуль и заполнить initialState данными из normalized-mock.js
Заменить использование данных из старого мока на данные из стора.(Используем подход как на лекции).

// ДЗ 7
Заменить мокковые данные на данные с сервера.