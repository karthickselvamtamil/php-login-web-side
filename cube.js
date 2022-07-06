let cube = document.querySelector('.cube');
let radio = document.querySelector('.readio-Group');

let currently = '';

radio.addEventListener('click', ()=> {
    let checked = radio.querySelector(':checked');
    let show = 'show-' + checked.value;

    if (currently) {
        cube.classList.remove(currently);
    }
    cube.classList.add(show);
    currently = show;
})