'use strict';

const table = document.querySelector('.container-table');
const creationForm = document.querySelector('.container-form');
const editContainer = document.querySelector('.container-edit');
const deleteContainer = document.querySelector('.container-delete');
const createButton = document.querySelector('.menu-create-button');
const editButton = document.querySelector('.menu-edit-button');
const deleteButton = document.querySelector('.menu-delete-button')
const clearButton = document.querySelector('.button-functional-clear');
const confirmButton = document.querySelector('.button-functional-confirm');
const editFields = document.querySelectorAll('.form-field-create');
let editFieldsValues = [];

editContainer.style.display = 'none';
creationForm.style.display = 'none';
deleteContainer.style.display = 'none';

const createBank = createButton.onclick = () => {
    if (creationForm.style.display == 'none') {
        editContainer.style.display = 'none';
        table.style.display = 'none';
        creationForm.style.display = '';
    } else {
        editContainer.style.display = 'none';
        table.style.display = '';
        creationForm.style.display = 'none';
    }
}




const editBank = editButton.onclick = () => {
    if (editContainer.style.display == 'none') {
        editContainer.style.display = 'flex';
        table.style.display = '';
        creationForm.style.display = 'none';
        deleteContainer.style.display = 'none';

    } else {
        table.style.display = '';
        editContainer.style.display = 'none';
        creationForm.style.display = 'none';
    }
}

const deleteBank = deleteButton.onclick = () => {
    if (deleteContainer.style.display == 'none') {
        deleteContainer.style.display = 'flex';
        table.style.display = '';
        creationForm.style.display = 'none';
        editContainer.style.display = 'none';

    } else {
        table.style.display = '';
        deleteContainer.style.display = 'none';
        creationForm.style.display = 'none';
    fetch('127.0.0.1:3000/banks/table').then(data => console.log(data));

    }
}

// const makeButtonActive = ();

const clearCreationBankForm = clearButton.onclick = () => {
    editFields.forEach(elem => elem.value = '');
}

const confirmCreationBankForm = confirmButton.onclick = () => {
    let i = 0;
    editFields.forEach(elem => editFieldsValues[i++] = elem.value);
    console.log({ editFieldsValues });
    // setData(...editFields);
    clearCreationBankForm();
};

// const updateTable = () => {
//     fetch('/banks')
//         .then(res => res.json())
//         .then(data => console.log(data));
// };
// updateTable();