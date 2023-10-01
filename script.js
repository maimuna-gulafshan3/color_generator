const color1 = document.getElementById('col1');
const color2 = document.getElementById('col2');
const color3 = document.getElementById('col3');
const color4 = document.getElementById('col4');
const color5 = document.getElementById('col5');

// const genbutton = document.getElementById('generate');
const preview = document.getElementById('grad-preview');


function setGradient(){
    preview.style.background = `linear-gradient(to right, ${col1.value}, ${col2.value},${col3.value},${col4.value},${col5.value})`;

}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
color3.addEventListener('input', setGradient);
color4.addEventListener('input', setGradient);
color5.addEventListener('input', setGradient);
// genbutton.addEventListener('click',setGradient);