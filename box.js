let box = document.querySelector('.box');
let radiogroup = document.querySelector('.radio-group');

let currentValue = '';

radiogroup.addEventListener('click', () => {
    let checked = document.querySelector(':checked');
    let visible = 'visible-' + checked.value;
    if (currentValue) {
        box.classList.remove(currentValue);
    }
    box.classList.add(visible);
    currentValue = visible;
});