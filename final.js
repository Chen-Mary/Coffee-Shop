let menu = document.querySelector("#menu-btn");
let menuContainer = document.querySelector(".menuContainer");

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    menuContainer.classList.toggle('active')
}
const x = window.matchMedia("(max-width: 600px)");

x.addEventListener("change",()=>{
    menu.classList.remove('fa-times')
    menuContainer.classList.remove('active')
});