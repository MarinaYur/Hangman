
// import products from './../../pages/menu/api/products.json';

document.addEventListener("DOMContentLoaded", function () {
    let products = [
        {
          "name": "Irish coffee",
          "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
          "price": "7.00",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Kahlua coffee",
          "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
          "price": "7.00",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Honey raf",
          "description": "Espresso with frothed milk, cream and aromatic honey",
          "price": "5.50",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Ice cappuccino",
          "description": "Cappuccino with soft thick foam in summer version with ice",
          "price": "5.00",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Espresso",
          "description": "Classic black coffee",
          "price": "4.50",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Latte",
          "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
          "price": "5.50",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Latte macchiato",
          "description": "Espresso with frothed milk and chocolate",
          "price": "5.50",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Coffee with cognac",
          "description": "Fragrant black coffee with cognac and whipped cream",
          "price": "6.50",
          "category": "coffee",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Cinnamon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Moroccan",
          "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
          "price": "4.50",
          "category": "tea",
          "img": "../../assets/tea-1tea1.png",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Lemon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Ginger",
          "description": "Original black tea with fresh ginger, lemon and honey",
          "price": "5.00",
          "category": "tea",
          "img": "../../assets/tea-2.png",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Lemon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Cranberry",
          "description": "Invigorating black tea with cranberry and honey",
          "price": "5.00",
          "category": "tea",
          "img": "../../assets/tea-3.png",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Lemon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Sea buckthorn",
          "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
          "price": "5.50",
          "category": "tea",
          "img": "../../assets/tea-4.png",
          "sizes": {
            "s": {
              "size": "200 ml",
              "add-price": "0.00"
            },
            "m": {
              "size": "300 ml",
              "add-price": "0.50"
            },
            "l": {
              "size": "400 ml",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Sugar",
              "add-price": "0.50"
            },
            {
              "name": "Lemon",
              "add-price": "0.50"
            },
            {
              "name": "Syrup",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Marble cheesecake",
          "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
          "price": "3.50",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Red velvet",
          "description": "Layer cake with cream cheese frosting",
          "price": "4.00",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Cheesecakes",
          "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
          "price": "4.50",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Creme brulee",
          "description": "Delicate creamy dessert in a caramel basket with wild berries",
          "price": "4.00",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Pancakes",
          "description": "Tender pancakes with strawberry jam and fresh strawberries",
          "price": "4.50",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Honey cake",
          "description": "Classic honey cake with delicate custard",
          "price": "4.50",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Chocolate cake",
          "description": "Cake with hot chocolate filling and nuts with dried apricots",
          "price": "5.50",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        },
      
        {
          "name": "Black forest",
          "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
          "price": "6.50",
          "category": "dessert",
          "sizes": {
            "s": {
              "size": "50 g",
              "add-price": "0.00"
            },
            "m": {
              "size": "100 g",
              "add-price": "0.50"
            },
            "l": {
              "size": "200 g",
              "add-price": "1.00"
            }
          },
          "additives": [
            {
              "name": "Berries",
              "add-price": "0.50"
            },
            {
              "name": "Nuts",
              "add-price": "0.50"
            },
            {
              "name": "Jam",
              "add-price": "0.50"
            }
          ]
        }
      ];
    
    const menuTabs = document.querySelector('.menu__tabs');
    let teaArray = [];
    let switcher = true;


    // let promise = fetch('./../../pages/menu/api/products.json');
    // console.log(products);

    // Menu page
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
        // console.log(target);
        choiceTabMenu(target);
    }
    
    for (let tab of tabsCollection) {
        tab.addEventListener('click', changeActiveTab);
        // tab.addEventListener('click', choiceTabMenu);
        // console.log(e.target.classList);
    }



    //create tea  menu
    console.log('products ' + products);
function choiceTabMenu(target) {
    let activeMenu = target.dataset.tab;
    console.log('activeMenu ' + activeMenu);
    console.log('products ' + products);
    products.forEach(productPosition => {
       
        if (productPosition.category == "tea") {
             
            teaArray.push(productPosition);
            // productName.innerHTML = productPosition.name;
            console.log('productPosition ' + productPosition);
    }
})
    if (target.dataset.tab == activeMenu && target.classList.contains('tab_active') && switcher) {
        console.log('Array ' + teaArray);
        fillingActiveTab(teaArray);
    }
}

    

function fillingActiveTab () {
    let menuTeaCards = document.createElement('div');
    menuTeaCards.classList.add('menuTeaCards');
    menuTabs.after(menuTeaCards);
    // if (!switcher){
    //    return;
    // } else {
    //     switcher = !switcher;
    teaArray.forEach(tea => {
        
    let card = document.createElement('div');
    card.classList.add('card');
    menuTeaCards.append(card);
    let cardImage = document.createElement('div');
    cardImage.classList.add('card__image');
    card.append(cardImage);
    let img = document.createElement('img');
    // img.classList.add('');
    cardImage.append(img);
    let productName = document.createElement('h4');
    productName.classList.add('productName');
    card.append(productName);
    let cardDescription = document.createElement('div');
    cardDescription.classList.add('card__description');
    card.append(cardDescription);
    let teaDescription = document.createElement('p');
    teaDescription.classList.add('teaDescription');
    let teaPrice = document.createElement('h4');
    teaPrice.classList.add('teaPrice');
    cardDescription.append(teaDescription);
    cardDescription.append(teaPrice);

    img.setAttribute('src', tea.img);
    productName.innerHTML = tea.name;
    teaDescription.innerHTML = tea.description;
    teaPrice.innerHTML = tea.price;
    menuTeaCards.append(card);
    switcher = false;
});
// }

// }


}})