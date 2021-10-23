'use strict';

const table = document.querySelector('.container-table');
const form = document.querySelector('.container-form');
const createButton = document.querySelector('.createButton');
const clearButton = document.querySelector('.button-functional-clear');
const confirmButton = document.querySelector('.button-functional-confirm');
const fields = document.querySelectorAll('.field');

const createBank = createButton.onclick = () => {
    if (table.style.display == '') {
        table.style.display = 'none';
        form.style.visibility = 'visible';
    }
    else {
        table.style.display = '';
        form.style.visibility = 'hidden';
    }
}

const clearCreationBankForm = clearButton.onclick = () => {
    fields.forEach(elem => elem.value = '');
}

const confirmCreationBankForm = confirmButton.onclick = () => {
    clearCreationBankForm();
};