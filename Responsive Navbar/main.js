const morevert = document.querySelector('.morevert');
const navList = document.querySelector('.nav-list');
morevert.addEventListener('click',() => {
    navList.classList.toggle('show');
});