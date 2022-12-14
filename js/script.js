'use strict';

// Валидация
let form = document.querySelector('.validationForm'),
    formInputs = document.querySelectorAll('.entryBox__input'),
    formInputsReq = document.querySelectorAll('[data-req]'),
    inputEmail = document.querySelector('entryBox__input_mail'),
    inputName = document.querySelector('.entryBox__input_name'),
    inputCompany = document.querySelector('.entryBox__input_company'),
    inputMessage = document.querySelector('.entryBox__input_message'),
    inputCheckbox = document.querySelector('.input__checkbox'),
    btn = document.querySelector('.validationForm__btn');

// Действие на кнопку
btn.addEventListener('click', (e) => {
    e.preventDefault();

    formInputsReq.forEach(item => {
        checkInput(item);
    });
});

// Проверка на пустоту
const checkInput = function (input) {
    if (input.value === "") {
        input.classList.add('error');
        input.classList.remove('okey');
    } else {
        input.classList.remove('error');
        input.classList.add('okey');
    }
};
