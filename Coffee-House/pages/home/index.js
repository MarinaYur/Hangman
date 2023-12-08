document.addEventListener("DOMContentLoaded", function() {
    let headerContainer = document.querySelector(".header-container");
    document.getElementById("hamburger").addEventListener("click", function () {
        headerContainer.classList.toggle("open__menu");
    })
    document.getElementById("header__nav").addEventListener("click", function (e) {
        console.log(e.target.className)
        if (e.target.matches('.link') || e.target.matches('.header__menubtn') || e.target.matches('.coffeeCupT')){
            headerContainer.classList.toggle("open__menu")
            
        }
    })
    // document.getElementById("header__menubtn").addEventListener("click", function (e) {
    //     console.log(e.target.className)
    //     if (e.target.className === "header__menubtn") {
    //         headerContainer.classList.toggle("open__menu")
    //         console.log(e.target.className)
    //     }
    // })
})
// e.target.tagName