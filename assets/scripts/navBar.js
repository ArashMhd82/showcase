const toggler = document.getElementById('menu_toggler');
const menu = document.getElementById('menu');
const crossToggle = document.getElementById('navTogglerCross');
const barToggle = document.getElementById('navTogglerBar');

crossToggle.style.display = 'none';


if (window.innerWidth < 1024){
    menu.style.height = '0px';
}

function menu_toggle(){
    if (toggler.checked){
        menu.style.height = '300px';
        barToggle.style.display = 'none';
        crossToggle.style.display = 'block';
    }else{
        menu.style.height = '0px';
        barToggle.style.display = 'block';
        crossToggle.style.display = 'none';
    }
}