let btnOpen = document.querySelector('.feedback');
let btnClose = document.querySelector('.btn');
let menu = document.querySelector('.modal');

btnOpen.onclick = function () {
    menu.classList.remove("modal-display");
}

btnClose.onclick = function () {
    menu.classList.toggle("modal-display");
}