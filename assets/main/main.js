console.log('===========1===========');

const paragraph = document.getElementById('paragraph');
paragraph.addEventListener('click', (e) =>
    console.log('Sie haben den Absatz geklickt')
);

console.log('===========2===========');

const select = document.querySelector('#my-select');
const selectedOptionText = document.querySelector('#option-selected');

select.addEventListener('change', (e) => {
    selectedOptionText.innerHTML = `Sie haben ${e.target.value} ausgewählt `;
});

console.log('===========3===========');

const display = document.querySelector('#display');
const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');
const output3 = document.querySelector('#output3');

document.body.addEventListener('keydown', (e) => {
    display.innerHTML = e.keyCode;
    output1.innerHTML = e.key;
    output2.innerHTML = e.keyCode;
    output3.innerHTML = e.code;
});

console.log('===========3===========');
