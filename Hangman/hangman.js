document.addEventListener('DOMContentLoaded', () => {
  const questionsArr = [
    {
      word: 'jupiter',
      clue: 'The largest planet in the solar system?',
    },
    {
      word: 'mercury',
      clue: 'the smallest planet in the solar system?',
    },
    {
      word: 'calibri',
      clue: 'The smallest birds in the world?',
    },
    { word: 'cheetah', clue: 'The fastest runner among land animals?' },
    {
      word: 'flowerbed',
      clue: 'What is a plot of land planted with flowers called?',
    },
    {
      word: 'whisper',
      clue: 'To speak very softly or quietly, often in a secretive manner.',
    },
    {
      word: 'brilliant',
      clue: 'Exceptionally clever, talented, or impressive.',
    },
    {
      word: 'puzzle',
      clue: 'A game, toy, or problem designed to test ingenuity or knowledge.',
    },
    {
      word: 'sunflower',
      clue: 'A tall plant with a large yellow flower head.',
    },
    {
      word: 'volcano',
      clue: 'A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.',
    },
    {
      word: 'rainbow',
      clue: 'A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.',
    },
    {
      word: 'piano',
      clue: 'A musical instrument played by pressing keys that cause hammers to strike strings.',
    },
    {
      word: 'dance',
      clue: 'A rhythmic movement of the body often performed to music.',
    },
    {
      word: 'science',
      clue: 'The systematic study of the structure and behavior of the physical and natural world.',
    },
  ];

  // create Game Environment, createMainElements
  let previousWord = '';
  const { body } = document;
  let incorrect;
  let guessedLetters;
  let wordSecret = '';
  let clickedLetterArr = [];
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
  alert('Please use only latin characters');

  // modal
  const overlay = document.createElement('div');
  const modal = document.createElement('div');
  const modalHeader = document.createElement('h2');
  const modalSecretWord = document.createElement('p');
  const modalButton = document.createElement('button');

  overlay.classList = 'overlay';
  modalHeader.classList = 'modal__header';
  modalSecretWord.classList = 'modal__secret-word';
  modalButton.classList = 'modal__button';

  modalButton.innerHTML = 'PLAY AGAIN';

  // create keyboard buttons
  for (let i = 0; i < 26; i += 1) {
    const keyboardСharacter = document.createElement('button');
    keyboardСharacter.classList = 'keyboard__character';
    keyboard.append(keyboardСharacter);
    keyboardСharacter.innerHTML = String.fromCharCode(i + 97);
  }

  function resetGame() {
    incorrect = 0;
    guessedLetters = 0;
    clickedLetterArr = [];
    gallowsPartPersonImg.src = '';
    taskPartCount.innerHTML = ` ${incorrect} / 6`;
    overlay.remove();
    modal.remove();
    modalHeader.remove();
    modalSecretWord.remove();
    modalButton.remove();
    keyboard.querySelectorAll('button').forEach((btn) => {
      btn.classList.remove('keyboard__character_clicked');
      btn.removeAttribute('disabled');
    });
    document.addEventListener('keydown', checkEnteredLetter);
  }

  function closeModalByEnter(e) {
    if (e.code === 'Enter') {
      createSecretWord(e);
    }
  }

  function createModal(resultOfGame, word) {
    const guestsWord = word.toUpperCase();
    body.prepend(overlay);
    overlay.append(modal);
    modal.append(modalHeader);
    modal.append(modalSecretWord);
    modal.append(modalButton);
    document.body.style.overflow = 'hidden';

    if (resultOfGame) {
      modal.classList = 'modal_win modal';
      modalHeader.innerHTML = 'You won!';
      modalSecretWord.innerHTML = `You guessed the secret word: ${guestsWord}!`;
    } else {
      modal.classList = 'modal_lose modal';
      modalHeader.innerHTML = 'Uhh, you lose.';
      modalSecretWord.innerHTML = `Secret word was ${guestsWord}!`;
    }
    document.addEventListener('keydown', closeModalByEnter);
  }


  function checkEnteredLetter(e) {
    if (clickedLetterArr.includes(e.key)) {
      return;
    }
    const word = wordSecret;
    let clickedLetter = '';
    if (e.key) {
      clickedLetter = e.key;
      const buttons = keyboard.querySelectorAll('button');
       buttons.forEach((button, index) => {
       if (e.key === button.innerHTML) {
        // The clicked/pressed letter is disabled
        button.setAttribute('disabled', 'disabled');
        button.classList.add('keyboard__character_clicked');
       }
      }
       );
    } else {
      clickedLetter = e.target.innerHTML;
    }
    clickedLetterArr.push(clickedLetter);
    if (e.target !== e.currentTarget) {
      if (word.includes(clickedLetter)) {
        [...word].forEach((letter, index) => {
          if (letter === clickedLetter) {
            // printed guessed lettes
            secretWord.querySelectorAll('div')[index].innerHTML = clickedLetter;
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
      e.target.setAttribute('disabled', 'disabled');
      if (guessedLetters === word.length) {
        createModal(true, word);
      }
      if (incorrect === 6) {
        lockedLetter = true;
        createModal(false, word);
        document.removeEventListener('keydown', checkEnteredLetter);
      }
    }
  }

  function addListenerOnVirtualKeyboardButtons() {
    resetGame();
    keyboard.addEventListener('click', checkEnteredLetter);
  }

  function createSecretWord() {
    document.removeEventListener('keydown', closeModalByEnter);
    document.body.style.overflow = '';
    secretWord.innerHTML = '';
    const { word, clue } =
      questionsArr[Math.floor(Math.random() * questionsArr.length)];
    if (word === previousWord) return createSecretWord();
    previousWord = word;
    taskPartHint.innerHTML = `Hint: ${clue}`;
    taskPartP.innerHTML = 'Incorrect quesses:';
    wordSecret = word;
    console.log(wordSecret);
    for (let i = 0; i < word.length; i += 1) {
      const letter = document.createElement('div');
      letter.className = 'secret-word__letter';
      secretWord.append(letter);
    }
    addListenerOnVirtualKeyboardButtons(word);
  }
  modalButton.addEventListener('click', createSecretWord);

  document.addEventListener('keydown', checkEnteredLetter);

  createSecretWord();
});
