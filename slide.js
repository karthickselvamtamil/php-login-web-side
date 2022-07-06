let slide = document.querySelector('.slide');
let preButton = document.querySelector('.pre');
let nextButton = document.querySelector('.next');

let current = 1;

preButton.addEventListener("click", () => {
    slide.classList.remove('move-' + current);
    if (current === 1) {
      current = 10
    } else {
        current--;
    }
    slide.classList.add('move-' + current);
});

nextButton.addEventListener('click', () => {
    slide.classList.remove('move-' + current);
    if (current === 10) {
        current = 1
    } else {
        current++
    }
    slide.classList.add('move-' + current)
})

