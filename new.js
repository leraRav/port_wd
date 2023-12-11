const element1 = document.querySelector('#my-element1');
const element2 = document.querySelector('#my-element2');
const element3 = document.querySelector('#my-element3');
const element4 = document.querySelector('#my-element4');
const block1 = document.querySelector('#my-block1');
const block2 = document.querySelector('#my-block2');
const block3 = document.querySelector('#my-block3');
const block4 = document.querySelector('#my-block4');


element1.addEventListener('click', function() {
    block1.classList.toggle('visible');
    block2.classList.toggle('hidden');
    block3.classList.toggle('hidden');
    block4.classList.toggle('hidden');
});
element2.addEventListener('click', function() {
    block2.classList.toggle('visible');
    block1.classList.toggle('hidden');
    block3.classList.toggle('hidden');
    block4.classList.toggle('hidden');
});
element3.addEventListener('click', function() {
    block3.classList.toggle('visible');
    block1.classList.toggle('hidden');
    block2.classList.toggle('hidden');
    block4.classList.toggle('hidden');
});
element4.addEventListener('click', function() {
    block4.classList.toggle('visible');
    block1.classList.toggle('hidden');
    block3.classList.toggle('hidden');
    block2.classList.toggle('hidden');
});