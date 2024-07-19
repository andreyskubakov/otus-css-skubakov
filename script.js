let btnOpen = document.querySelector('.feedback');
let btnClose = document.querySelector('.btn');
let menu = document.querySelector('.modal');
let body = document.querySelector('body');

btnOpen.onclick = function () {
    menu.classList.remove("modal-display");
    body.classList.add("body");
}

btnClose.onclick = function () {
    menu.classList.toggle("modal-display");
    body.classList.toggle("body");
}