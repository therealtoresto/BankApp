'use strict';

const table = document.querySelector('.container-table');
const tableBody = document.querySelector('.tableBody');
const creationForm = document.querySelector('.container-form');
const editContainer = document.querySelector('.container-edit');
const deleteContainer = document.querySelector('.container-delete');
const createButton = document.querySelector('.menu-create-button');
const editButton = document.querySelector('.menu-edit-button');
const deleteButton = document.querySelector('.menu-delete-button')
const clearButton = document.querySelector('.button-functional-clear');
const confirmButton = document.querySelector('.button-functional-confirm');
const editFields = document.querySelectorAll('.form-create-field');
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
    updateTable();
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
    // fetch('/banks/getData').then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
    if (deleteContainer.style.display == 'none') {
        deleteContainer.style.display = 'flex';
        table.style.display = '';
        creationForm.style.display = 'none';
        editContainer.style.display = 'none';

    } else {
        table.style.display = '';
        deleteContainer.style.display = 'none';
        creationForm.style.display = 'none';
    }
}

// const makeButtonActive = ();

const clearCreationBankForm = clearButton.onclick = () => {
    editFields.forEach(elem => elem.value = '');
}
const sendData = ( data ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'banks/getData');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Send: ' + data);
        }
    };
    xhr.send(data);
}

const confirmCreationBankForm = confirmButton.onclick = () => {
    let i = 0;
    editFields.forEach(elem => editFieldsValues[i++] = elem.value);
    const json = JSON.stringify(editFieldsValues);
    sendData(json);
    //clearCreationBankForm();
};

const updateTable = () => {
    let html = '';
    fetch('/banks/getData')
        .then(res => res.json())
        .then(obj => {
            if (typeof obj !== 'object') return 0;
            for (let row = 0; row < Object.keys(obj).length; row++) {
                html = html + '<tr>'
                for(let key in obj[row]) {
                    if (key === 'id') continue;
                    html = html + `<td>${obj[row][key]}</td>`;
                }
                html = html + '</tr>'
            }
            tableBody.innerHTML = html;
        });
    
};
updateTable();