document.addEventListener('DOMContentLoaded', function () {
  // create Game Environment, createMainElements
  const { body } = document;
  let incorrect = 0;
  let guessedLetters = 0;
  const main = document.createElement('main');
  const gallowsPart = document.createElement('div');
  const img = document.createElement('img');
  const gallowsPartPerson = document.createElement('div');
  const gallowsPartPersonImg = document.createElement('img');
  const gallowsPartBody = document.createElement('img');
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

  function createModal(resultOfGame, word) {
    const guestsWord = word.toUpperCase();
    // modal
    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const modalHeader = document.createElement('h2');
    const modalSecretWord = document.createElement('p');
    const modalButton = document.createElement('button');

    modal.classList = 'modal';
    overlay.classList = 'overlay';
    modalHeader.classList = 'modal__header';
    modalSecretWord.classList = 'modal__secret-word';
    modalButton.classList = 'modal__button';

    modalButton.innerHTML = 'PLAY AGAIN';

    body.prepend(overlay);
    overlay.append(modal);
    modal.append(modalHeader);
    modal.append(modalSecretWord);
    modal.append(modalButton);

    if (resultOfGame) {
      modalHeader.innerHTML = 'You won!';
      modalSecretWord.innerHTML = `You guessed the secret word: ${guestsWord}!`;
    } else {
      modalHeader.innerHTML = 'Uhh, you lost.';
      modalSecretWord.innerHTML = `Secret word was ${guestsWord}!`;
    }
  }

  function checkEnteredLetter(word) {
    keyboard.addEventListener('click', (e) => {
      const clickedLetter = e.target.innerHTML;
      if (e.target !== e.currentTarget) {
        if (word.includes(clickedLetter)) {
          [...word].forEach((letter, index) => {
            if (letter === clickedLetter) {
              // printed guessed lettes
              secretWord.querySelectorAll('div')[index].innerHTML =
                clickedLetter;
              secretWord
                .querySelectorAll('div')
                [index].classList.add('secret-word__letter_guessed');
              guessedLetters += 1;
            }
          });
        } else {
          incorrect += 1;
          taskPartCount.innerHTML = ` ${incorrect} / 6`;
          // appear parts of person when incorrect answer in the logical order (head, body, left arm, right arm, left leg, right leg)
          gallowsPartPersonImg.src = `./assets/hangman-${incorrect}.svg`;
        }
        e.target.classList.add('keyboard__character_clicked');
        // The clicked/pressed letter is disabled
        //     e.target.setAttribute('disabled', 'disabled');
        if (guessedLetters === word.length) {
          createModal(true, word);
        }
        if (incorrect === 6) {
          createModal(false, word);
        }
        console.log(e.target);
      }
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
