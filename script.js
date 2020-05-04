/***************Js Directions**************************
 * Read Values of colors for both inputs- select two inputs
 * Print out the like value under neath select h3 enter some text
 * listen for an event like- click, mouseenter, keypress,etc. here use duh input
 * Change background color, inspect change body
 * get body element by id, add id
 * How to make it cleaner code, create a function
 * have css writing at bottom
 * */

// Select h3
const css = document.querySelector('h3');
// Select color inputs
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
//body selector
const body = document.getElementById('gradient');
const button = document.createElement('button');
// Select h4
const ranNum = document.querySelector('h4');

function createButton() {
  button.appendChild(document.createTextNode('Random Numbers'));
  body.appendChild(button);
}

createButton();

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'random rgba generator(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
}
let color = random_rgba;
//console.log(random_rgba());

// g.fillStyle = color;
// g.strokeStyle = color;

function resetColor() {
  color1.value = '#00ff00';
  color2.value = '#ff0000';
}

resetColor();

function setGreadient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background + ';';
}

// test on body
//console.log(body);
//body.style.background = 'red';
//test in console
// console.log(css);
// console.log(color1);
// console.log(color2);

//color1 eventlistner test
color1.addEventListener('input', setGreadient);
//color2 eventlistner test
color2.addEventListener('input', setGreadient);
//Create button eventlistner
button.addEventListener('click', setRandomNums);

function setRandomNums() {
  body.style.background = 'Random rgba( ' + color.value + ')';

  ranNum.textContent = random_rgba();
}

function setGreadientend() {
  body.style.background = 'linear-gradient(to right, red, yellow)';

  css.textContent = body.style.background + ';';
}
setGreadientend();
