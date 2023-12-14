document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.querySelector(".header-container");
    const body = document.body;
     //hamburger
     document.getElementById("hamburger").addEventListener("click", function (e) {
        console.log('e.target.className проверка');
        headerContainer.classList.toggle("open__menu");
        body.classList.toggle('active__body');
    })
    document.getElementById("header__nav").addEventListener("click", function (e) {
        if (e.target.matches('.link') || e.target.matches('.header__menubtn') || e.target.matches('.coffeeCupT')) {
            headerContainer.classList.toggle("open__menu");
            body.classList.toggle('active__body');
        }
    })
})