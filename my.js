const btncolor = document.getElementById('btn-color');
const txtcolor = document.getElementById('txt-color');
btncolor.addEventListener('click',rendomcolor)
rendomcolor()
function rendomcolor(){
    var color1 = Math.floor(Math.random() * 256)
    var color2 = Math.floor(Math.random() * 256)
    var color3 = Math.floor(Math.random() * 256)
    var color = `rgb(${color1},${color2},${color3}`
   document.body.style.background=color;
   txtcolor.textContent = color

}
