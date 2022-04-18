const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');
const question = document.querySelector('.question');
let a = 0;

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value = '';

    item.addEventListener('click', () => {
        item.classList.add('toDoCompleted');
    })
    
    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })
})

question.addEventListener('click', () => {
    const text = document.createElement('p');
    text.innerText = '* To cross out the task from the list, click on it once.\nTo remove the task from the list, double-click it. *\n\n Click HERE to close this message';
    text.classList.add('toDisplayMessage'); 
    toDoContainer.appendChild(text);
    
    text.addEventListener('click', () => {
        toDoContainer.removeChild(text);
    })
   
})


