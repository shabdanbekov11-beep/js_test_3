const input = document.getElementById('title');
const addButton = document.getElementById('add');
const list = document.querySelector('.content ul');

function listItem(){
    const text = input.value.trim();
    if(text === ''){
        alert('Пожалуйста, введите текст!')
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
    <span class="item-text">${text}</span>
    <button class="delete-btn">Удалить</button>`;

    list.appendChild(li);
    input.value = '';
    input.focus();
    
    
}

addButton.addEventListener('click', listItem);
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        listItem();
    }
});

list.addEventListener('click', function(event) {
    const deleteBtn = event.target.closest('.delete-btn');
    if (deleteBtn && list.contains(deleteBtn)) {
        deleteBtn.closest('li').remove();
    }
});





