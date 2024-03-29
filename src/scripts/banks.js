'use strict';

const table = document.querySelector('.container-table');
const tableBody = document.querySelector('.tableBody');
const creationForm = document.querySelector('.container-form');
const editContainer = document.querySelector('.container-edit');
const deleteContainer = document.querySelector('.container-delete');
const createButton = document.querySelector('.menu-create-button');
const editButton = document.querySelector('.menu-edit-button');
const btnFuncEdit = document.querySelector('.button-functional-edit');
const deleteButton = document.querySelector('.menu-delete-button')
const clearButton = document.querySelector('.button-functional-clear');
const confirmButton = document.querySelector('.button-functional-confirm');
const creationFields = document.querySelectorAll('.form-create-field');
const datalistEdit = document.getElementById('datalist-edit');
const fieldEdit = document.querySelector('.form-field-edit');

let editFieldsValues = [];

editContainer.style.display = 'none';
creationForm.style.display = 'none';
deleteContainer.style.display = 'none';

const createBank = createButton.onclick = () => {
    if (creationForm.style.display == 'none') {
        editContainer.style.display = 'none';
        table.style.display = 'none';
        creationForm.style.display = '';
        deleteContainer.style.display = 'none';
    } else {
        editContainer.style.display = 'none';
        table.style.display = '';
        creationForm.style.display = 'none';
        deleteContainer.style.display = 'none';
    }
    updateTable();
}

const showEditForm = btnFuncEdit.onclick = () => {
    const namesList = tableBody.querySelectorAll('tr>td:first-child');
    const allBanksNames = [];
    namesList.forEach(el => allBanksNames.push(el.textContent));
    allBanksNames.forEach(elem => {
        if (fieldEdit.value === elem) {
        editContainer.style.display = 'none';
        table.style.display = 'none';
        creationForm.style.display = '';
        deleteContainer.style.display = 'none';
        }
    })
}
const showInputOptions = fieldEdit.onclick = () => {
    const namesList = tableBody.querySelectorAll('tr>td:first-child');
    const rowsList = tableBody.querySelectorAll('tr');
    const allBanksNames = [];
    namesList.forEach(el => allBanksNames.push(el.textContent));

    const clearHint = () => {
        datalistEdit.innerHTML = ' ';
    };

    const fillDatalist = (arr) => {
        clearHint();
        datalistEdit.append(...arr.map(( name ) => new Option(name)));

    };

    clearHint();
    fillDatalist(allBanksNames);

    const updateValue = () => {
        let comparedNames = [];
        const inputValue = fieldEdit.value;
        const focuseRow = () => {
            rowsList.forEach(elem => elem.classList.remove('focused'));
            if (allBanksNames.includes(comparedNames[0])) {
                for (let i = 0; i < namesList.length; i++) { 
                    if (namesList[i].textContent == comparedNames[0]) {
                        rowsList[i].classList.add('focused');
                    }
                }

            }
        };

        clearHint();
        
        for (let i = 0; i < allBanksNames.length; i++) {
            if (allBanksNames[i].includes(inputValue) && 
                inputValue.length > 2 && 
                (!comparedNames.includes(allBanksNames[i]))) {
                    comparedNames.push(allBanksNames[i]);
                    fillDatalist(comparedNames);
            } else if (inputValue.length < 3) {
                fillDatalist(allBanksNames);
            }
        };
        focuseRow();

    }
    fieldEdit.addEventListener('input', updateValue);
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
    }
}

const clearCreationBankForm = clearButton.onclick = () => {
    creationFields.forEach(elem => elem.value = '');
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
    creationFields.forEach(elem => {
        if (elem.value === '') throw new Error('All fields can`t be null');
        editFieldsValues[i++] = elem.value;
    });
    const json = JSON.stringify(editFieldsValues);
    sendData(json);
    clearCreationBankForm();
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