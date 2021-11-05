'use strict';

const table = document.querySelector('.container-table');
const form = document.querySelector('.container-form');
const search = document.querySelector('.container-search');
const createButton = document.querySelector('.create-button');
const editButton = document.querySelector('.edit-button');
const deleteButton = document.querySelector('.delete-button')
const clearButton = document.querySelector('.button-functional-clear');
const confirmButton = document.querySelector('.button-functional-confirm');
const fields = document.querySelectorAll('.field');

search.style.display = 'none';
form.style.display = 'none';

const createBank = createButton.onclick = () => {

    if (table.style.display == '') {
        search.style.display = 'none';
        table.style.display = 'none';
        form.style.display = '';
    } else {
        search.style.display = 'none';
        table.style.display = '';
        form.style.display = 'none';
    }
}

const editBank = editButton.onclick = () => {
    if (search.style.display == 'none') {
        search.style.display = 'flex';
        table.style.display = '';
        form.style.display = 'none';

    } else {
        table.style.display = '';
        search.style.display = 'none';
        form.style.display = 'none';
    }
}

const deleteBank = deleteButton.onclick = () => {
    if (search.style.display == 'none') {
        search.style.display = 'flex';
        table.style.display = '';
        form.style.display = 'none';

    } else {
        table.style.display = '';
        search.style.display = 'none';
        form.style.display = 'none';
    }
}

const clearCreationBankForm = clearButton.onclick = () => {
    fields.forEach(elem => elem.value = '');
}

const confirmCreationBankForm = confirmButton.onclick = () => {
    clearCreationBankForm();
};