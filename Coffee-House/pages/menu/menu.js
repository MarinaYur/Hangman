
// import products from './../../pages/menu/api/products.json';

document.addEventListener("DOMContentLoaded", function () {
  let products = [
    {
      "name": "Irish coffee",
      "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      "price": "7.00",
      "category": "coffee",
      "img": "../../assets/coffee-1.jpg",
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
      "img": "../../assets/coffee-2.jpg",
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
      "img": "../../assets/coffee-3.jpg",
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
      "img": "../../assets/coffee-4.jpg",
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
      "img": "../../assets/coffee-5.jpg",
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
      "img": "../../assets/coffee-6.jpg",
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
      "img": "../../assets/coffee-7.jpg",
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
      "img": "../../assets/coffee-8.jpg",
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
      "img": "../../assets/dessert-1.png",
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
      "img": "../../assets/dessert-2.png",
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
      "img": "../../assets/dessert-3.png",
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
      "img": "../../assets/dessert-4.png",
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
      "img": "../../assets/dessert-5.png",
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
      "img": "../../assets/dessert-6.png",
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
      "img": "../../assets/dessert-7.png",
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
      "img": "../../assets/dessert-8.png",
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
  const refresh = document.querySelector('.refresh');
  const windowInnerWidth = document.documentElement.clientWidth;
  const windowInnerHeight = document.documentElement.clientHeight;
  const cards = document.querySelectorAll('.card');
  const modal = document.querySelector('.modal');
  let teaArray = [];
  let switcher = true;
  let indicRosePrice300 = 0;
  let indicRosePrice400 = 0;
  // let initialPrice;
  let menuCards = document.querySelector('.menuCards');
  const body = document.body;
  const overlay = document.querySelector('.overlay');
  const modalClose = document.querySelector('.modal__close');
  const modaltitle = document.querySelector('.modal__title');
  const modalDescription = document.querySelector('.modal__description');
  const modalPrice = document.querySelector('.price');
  const modalImg = document.querySelector('.modal__img');
  const modalButtons1 = document.querySelectorAll('.modal__button1');
  const modalButtonVolumes = document.querySelectorAll('.modal__button_volume');
  const modalButtonActive = document.querySelectorAll('.modal__button_active');
  const modalButtons2 = document.querySelectorAll('.modal__button2');
  const modalButtonInitial = document.querySelector('.modal__button_initial');



  // let promise = fetch('./../../pages/menu/api/products.json');
  // console.log(products);

  // Menu page
  const tabsCollection = document.querySelectorAll('.tab');


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
  }
  refresh.addEventListener('click', loadingMoreProducts);
  for (let card of cards) {
    card.addEventListener('click', callModal);
  }
  modalClose.addEventListener('click', closingModal);
  overlay.addEventListener('click', closingModal);
  for (let modalButton of modalButtons1) {
    modalButton.addEventListener('click', chooseSize);
  }


  //create tea  menu
  function choiceTabMenu(target) {
    let activeMenu = target.dataset.tab;

    products.forEach(productPosition => {
      console.log('productPosition.category ' + productPosition.category)
      if (productPosition.category == activeMenu) {

        teaArray.push(productPosition);
        // productName.innerHTML = productPosition.name;
        ;
      }
    })
    if (switcher) {
      fillingActiveTab(teaArray);
    }
  }

  function fillingActiveTab() {
    while (menuCards.firstChild) {
      menuCards.removeChild(menuCards.firstChild);
    }

    teaArray.forEach(tea => {
      let card = document.createElement('div');
      card.classList.add('card');
      menuCards.append(card);
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
      menuCards.append(card);
      card.addEventListener('click', callModal);
      (teaArray.length > 4) ? refresh.style.display = 'block' : refresh.style.display = 'none';;
      // switcher = false;
    });
    teaArray.splice(0, teaArray.length);
  }

  function loadingMoreProducts() {
    let changeWidth = windowInnerWidth;
    const cards = document.querySelectorAll('.card');
    for (let card of cards) {
      card.style.display = 'block';
    }
    refresh.style.display = 'none';
  }
  // window.addEventListener('resize', changeScreenWidth);
  // function changeScreenWidth () {
  //    console.log(cards[5])
  //    for (let card of cards) {
  //     card.style.display = 'none';
  //    }
  // cards[6].style.display = 'none';
  // cards[7].style.display = 'none';
  // cards[4].style.display = 'none';
  // refresh.style.display = 'block';
  // }
  function callModal(e) {
    // console.log(e.target.closest('.card'));
    // console.log(modal);
    let productName = '';
    let target = e.target.closest('.card');
    modal.style.display = 'flex';
    overlay.classList.toggle('overlay__on');
    body.classList.toggle('active__body');
    for (let i = 0; i < target.children.length; i++) {
      console.log(target.children[i]);
      if (target.children[i].classList.contains('productName')) {
        productName = target.children[i].innerHTML;
      }
    }
    modaltitle.innerHTML = productName;
    products.forEach(product => {
      if (product.name === productName) {
        // 
        modalDescription.innerHTML = product.description;
        console.log(modalImg);
        modalPrice.innerHTML = '$' + product.price;
        modalImg.setAttribute('src', product.img);
      }

    })
    // modalDescription.innerHTML = products;
  }
  function closingModal(e) {
    if (e.target.closest('.modal__close') || e.target.firstElementChild === modal) {
      modal.style.display = 'none';
      overlay.classList.remove('overlay__on');
      body.classList.remove('active__body');
      for (let modalButton of modalButtons1) {
      modalButton.classList.remove('modal__button_active');
    }
      modalButtonInitial.classList.add('modal__button_active');
    }
    
    
  }

  function chooseSize(e) {
    console.log('choosing size')
    let target = e.target;
    for (let modalButton of modalButtons1) {
      // console.log('modalButton', modalButton);
      modalButton.classList.remove('modal__button_active');
    }
    if (!target.classList.contains('modal__button1')) {
      target = target.closest('.modal__button1');
    }
    target.classList.add('modal__button_active');
    // for (let modalButtonVolume of modalButtonVolumes) {
    //   if (modalButtonVolume.innerHTML == "300ml") {
    //     if (!indicRosePrice300) {
    //       let initialPrice = modalPrice.innerHTML.split('').splice(1, 4).join('');
    //       let price = 0.5 + (+initialPrice);
    //       modalPrice.innerHTML = '$' + price;
    //       indicRosePrice300 = 1;
    //       // indicRosePrice400 = 0
    //       console.log(price);
    //     }
    //   }
    // }


  }
})