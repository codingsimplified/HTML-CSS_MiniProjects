const light = document.querySelector('.light');

window.addEventListener('mousemove',(e)=>{
    light.style.setProperty('--x',e.clientX + 'px');
    light.style.setProperty('--y',e.clientY + 'px');
})