const header = document.querySelector('nav');


window.addEventListener('scroll', () => {
        const butt = document.querySelector(".nav-elements .title-el-port");
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollBottom = scrollTop + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop === 0) {
            butt.style.color = 'white';
            header.style.backgroundColor = 'transparent';
            header.style.cssText = "border-bottom: 0;";

        } else {
            butt.style.color = 'white';
            header.style.cssText += 'background: rgba(30, 144, 255,0.5); ';
            header.style.cssText += "border-bottom: 1px solid white;";
        }
    });



let burgerOpenButton = document.getElementById("hamburger");
let burgerCloseButton = document.querySelector(".drop_button button");
let burgerMenu = document.querySelector(".dropdown");

burgerOpenButton.addEventListener('click', function() {

    burgerMenu.className = 'dropdown_active';

});


burgerCloseButton.addEventListener('click',() => {
    burgerMenu.className = 'dropdown';

});


