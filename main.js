const form = document.querySelector('.note__form.add');
const filteredForm = document.querySelector('.note__form.search');
const itemList = document.querySelector('.note__items.list');
const itemsRaw = [...document.querySelectorAll('.note__items.list__item')];
const items = itemsRaw.map(item=> item.innerHTML);

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
filteredForm.addEventListener('keyup', filterList);

function addItem (e){
    e.preventDefault();
    const inputValue = document.querySelector('.note__form.text.add').value;

    items.push(inputValue);
    populateList(items, itemList);
}

function populateList(itemList, listToPopulate){
    listToPopulate.innerHTML = itemList.map(item => `<div class="list-item module"><li class="note__items list__item">${item}</li><button class="list__item delete-button">X</button></div>`).join('');
}

function deleteItem(e){
    if(e.target.classList.contains('delete-button')){
       liValue = e.target.previousSibling.value;
       indexOfValue = items.indexOf(liValue);
       items.splice(indexOfValue, 1);
       populateList(items, itemList);
    };
}

function filterList(e){
    const wordToMatch = e.target.value;
    const filteredList = items.filter(item => {
        const regex = new RegExp(wordToMatch, 'gi');
        return item.match(regex);
    });
    populateList(filteredList, itemList);
}
