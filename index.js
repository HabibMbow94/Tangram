// FUNCTIONALITY FOR BUTTONS
function swap(cssFile) {
    var link = document.getElementById("style");
    link.href = cssFile;
}


/* Functionality for Dark Mode */
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.className === "dark-mode") {
        document.getElementById("dark-mode").src = "Images/moon.png";
    } else {
        document.getElementById("dark-mode").src = "Images/sun.png";
    }
}


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}