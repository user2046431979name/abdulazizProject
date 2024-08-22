const header = document.querySelector('nav');


window.addEventListener('scroll', () => {
        const butt = document.querySelector(".nav-elements .title-el-port");
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollBottom = scrollTop + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop === 0) {
            butt.style.color = 'white';
            header.style.backgroundColor = 'transparent';
        } else {
            butt.style.color = 'black';
            header.style.backgroundColor = '#6b6b6b';
        }
    });



let burgerIcon = document.getElementById("hamburger");
let burgerList = document.querySelector(".dropdown")



burgerIcon.addEventListener('click',() => {
    if (burgerList.style.display === 'none') {
            burgerList.style.display = 'flex';
        } else {
            burgerList.style.display = 'none';
        }
});

