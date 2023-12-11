const element = document.querySelector('#my-element');
const block = document.querySelector('#my-block');
element.addEventListener('click', function() {
    block.classList.toggle('visible');
    block.classList.toggle('hidden');
});