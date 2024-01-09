document.addEventListener('DOMContentLoaded', function () {
  // create Game Environment, createMainElements
  const { body } = document;
  let incorrect = 0;
  const main = document.createElement('div');
  const gallowsPart = document.createElement('div');
  const img = document.createElement('img');
  const gallowsPartPerson = document.createElement('div');
  const gallowsPartPersonImg = document.createElement('img');
  const gallowsPartBody = document.createElement('img');
  // const gallowsPartHandOne = document.createElement('img');
  // const gallowsPartHandTwo = document.createElement('img');
  const gallowsPartName = document.createElement('h1');
  const mainTaskWrapper = document.createElement('div');
  const taskPart = document.createElement('div');
  const secretWord = document.createElement('div');
  const taskPartHintCount = document.createElement('div');
  const taskPartHint = document.createElement('h2');
  const taskPartP = document.createElement('p');
  const taskPartCount = document.createElement('span');
  const keyboard = document.createElement('div');

  main.className = 'main';
  img.className = 'galows-part__gallows';
  gallowsPartPerson.className = 'galows-part__person';
  gallowsPartBody.className = 'gallows-part__body';
  gallowsPartName.className = 'gallows-part__name';
  taskPart.className = 'task-part';
  secretWord.className = 'task-part__secret-word secret-word';
  mainTaskWrapper.classList = 'main-task__wrapper';
  taskPartHintCount.className = 'task-part__hint-count';
  taskPartHint.className = 'task-part__hint';
  taskPartP.className = 'task-part__p';
  taskPartCount.className = 'task-part__count';
  gallowsPart.className = 'gallows-part';
  keyboard.className = 'keyboard';

  img.alt = 'gallows';
  img.src = './assets/gallows.svg';
  // gallowsPartPersonImg.src = `./assets/hangman-1.svg`;

  body.append(main);
  gallowsPart.append(img);
  gallowsPart.append(gallowsPartPerson);
  gallowsPartPerson.append(gallowsPartPersonImg);

  gallowsPart.append(gallowsPartName);
  main.append(taskPart);
  main.prepend(gallowsPart);

  taskPart.append(mainTaskWrapper);
  mainTaskWrapper.append(secretWord);
  mainTaskWrapper.append(taskPartHintCount);
  mainTaskWrapper.append(keyboard);
  taskPartHintCount.append(taskPartHint);
  taskPartHintCount.append(taskPartP);
  taskPartHintCount.append(taskPartCount);

  gallowsPartName.innerHTML = 'Hangman game';
  taskPartCount.innerHTML = ` ${incorrect} / 6`;

  // keyboard buttons and add handler of click button event
  for (let i = 0; i < 26; i += 1) {
    const keyboardСharacter = document.createElement('button');
    keyboardСharacter.classList = 'keyboard__character';
    keyboard.append(keyboardСharacter);
    keyboardСharacter.innerHTML = String.fromCharCode(i + 97);
  }

  function checkEnteredLetter(word) {
    keyboard.addEventListener('click', (e) => {
      const clickedLetter = e.target.innerHTML;
      if (word.includes(clickedLetter)) {
        [...word].forEach((letter, index) => {
          if (letter === clickedLetter) {
            // printed guessed lettes
            secretWord.querySelectorAll('div')[index].innerHTML = clickedLetter;
            secretWord
              .querySelectorAll('div')
              [index].classList.add('secret-word__letter_guessed');
          }
        });
      } else {
        incorrect += 1;
        taskPartCount.innerHTML = ` ${incorrect} / 6`;
        // appear parts of person when incorrect answer
        gallowsPartPersonImg.src = `./assets/hangman-${incorrect}.svg`;
      }
      e.target.classList.add('keyboard__character_clicked');
      console.log(e.target);
    });
  }

  const questionsArr = [
    {
      word: 'jupiter',
      clue: 'The largest planet in the solar system?',
    },
    { word: 'mercury', clue: 'the smallest planet in the solar system?' },
    {
      word: 'calibri',
      clue: 'The smallest birds in the world?',
    },
    { word: 'cheetah', clue: 'The fastest runner among land animals?' },
    {
      word: 'flowerbed',
      clue: 'What is a plot of land planted with flowers called?',
    },
  ];

  function createSecretWord() {
    const { word, clue } =
      questionsArr[Math.floor(Math.random() * questionsArr.length)];
    taskPartHint.innerHTML = `Hint: ${clue}`;
    taskPartP.innerHTML = 'Incorrect quesses:';
    console.log(word);
    for (let i = 0; i < word.length; i += 1) {
      const letter = document.createElement('div');
      letter.className = 'secret-word__letter';
      secretWord.append(letter);
    }
    checkEnteredLetter(word);
  }

  // const questionsObjRu = [

  //   Юпитер: 'Самая большая планета Солнечной системы?',
  //   Меркурий: 'Наименьшая планета Солнечной системы',
  //   Калибри: 'Самые маленькие птицы в мире',
  //   гепард: 'Самый быстрый бегун среди наземных животных',
  //   клумба: 'Как называется участок земли, засаженный цветами?',
  // ]
  // ;
  // createGameEnvironment();
  // createKeyboard();
  createSecretWord();
});
