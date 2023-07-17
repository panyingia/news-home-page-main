const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn')
const sideBar = document.querySelector('.sidebar');
menuBtn.addEventListener('click', function () {
    sideBar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
    sideBar.classList.remove('show-sidebar')
})
