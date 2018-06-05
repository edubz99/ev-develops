const menuButton = document.querySelector('.menu-controller');
const nav = document.querySelector('nav');
const navList = document.querySelector('nav ul');


function toggleMenu() {
    if(!navList.classList.contains('show')){
        navList.classList.add('show');
        nav.style.background = '#2c393f';
        nav.style.position = 'static';
        menuButton.style.color = '#ffffff80';
    } else {
        navList.classList.remove('show');
        nav.style.background = 'none';
        menuButton.style.color = '#c2185b';
        //Delay the amount time to apply position absolute
        animationTimer(800);
    }
}

function animationTimer(time) {
    setTimeout(()=> {
      nav.style.position = 'absolute'
    },time);
}

//EventListener
menuButton.addEventListener('click', toggleMenu);
