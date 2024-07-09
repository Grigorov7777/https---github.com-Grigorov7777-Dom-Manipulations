const itemList = document.getElementById('itemList');
const addItemBtn = document.getElementById('addItemBtn');
const newItemText = document.getElementById('newItemText');

addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `<span>${newItemText.value}</span> <button class="editBtn">Edit</button>`;
    itemList.appendChild(newItem);
    newItemText.value = '';
});

itemList.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
        const itemText = e.target.previousElementSibling;
        const newText = prompt('Edit item:', itemText.textContent);
        if (newText !== null) {
            itemText.textContent = newText;
        }
    }
});