const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
css.style.whiteSpace = 'pre';

const setGradientFromCSS = () => {
    body.style.background = `
    linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent =  "background-image: " + body.style.background + ';\r\n'; 
    css.textContent += "background-image: -webkit-"+ body.style.background + ';\r\n'; 
    css.textContent += "background-image: -o-"+ body.style.background + ';\r\n';
    css.textContent += "background-image: -moz-"+ body.style.background + ';\r\n';
}
setGradientFromCSS();
color1.addEventListener('input', setGradientFromCSS);
color2.addEventListener('input', setGradientFromCSS);