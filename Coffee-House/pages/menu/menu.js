// import products from '../menu/api/products';

document.addEventListener("DOMContentLoaded", async function () {
    
    (async() => {
        let response = await fetch('../menu/api/products'), users = await response.json();
        console.log(users);  
        })();
    // Menu page
// console.log(products);
    const tabsCollection = document.querySelectorAll('.tab');

    // const clickHandler = function (e) {
    //     let tab = e.target;
    //     if (!tab.classList.contains('tab')) {
    //         tab =  tab.closest('.tab');
    //     }
    //     let tabName = tab.dataset.tab;
    //     console.log("i clicked " + tabName);
    // }

    const changeActiveTab = function (e) {
        let target = e.target;
        for (let tab of tabsCollection) {
            tab.classList.remove('tab_active');
        }
        if (!target.classList.contains('tab')) {
            target = target.closest('.tab');
        }
        target.classList.add('tab_active');
        console.log(target);
    }
    



    for (tab of tabsCollection) {
        tab.addEventListener('click', changeActiveTab);
        // console.log(e.target.classList);
    }





})