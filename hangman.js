document.addEventListener('DOMContentLoaded', function () {
  const { body } = document;
  function createGameEnvironment() {
    createMainElements();
  }
  function createMainElements() {
    // console.log('hgjkfsj');
    const main = document.createElement('div');
    const img = document.createElement('img');
    const mainTaskWrapper = document.createElement('div');
    const taskPart = document.createElement('div');
    const secretWord = document.createElement('div');

    main.className = 'main';
    img.className = 'main-gallows';
    taskPart.className = 'task-part';
    secretWord.className = 'task-part__secret-word secret-word';
    mainTaskWrapper.classList = 'main-task__wrapper';

    img.src = './assets/gallows.svg';

    body.append(main);
    main.append(img);
    main.append(taskPart);

    taskPart.append(mainTaskWrapper);
    mainTaskWrapper.append(secretWord);

    const k = 10;

    for (let i = 0; i <= k; i += 1) {
      const letter = document.createElement('div');
      letter.className = 'secret-word__letter';
      secretWord.append(letter);
    }
  }

  createGameEnvironment();
  const questionsObj = {
    Jupiter: 'The largest planet in the solar system?',
    Mercury: 'the smallest planet in the solar system?',
    calibri: 'The smallest birds in the world?',
    cheetah: 'The fastest runner among land animals?',
    Flowerbed: 'What is a plot of land planted with flowers called?',
  };
  const questionsObjRu = {
    Юпитер: 'Самая большая планета Солнечной системы?',
    Меркурий: 'Наименьшая планета Солнечной системы',
    Калибри: 'Самые маленькие птицы в мире',
    гепард: 'Самый быстрый бегун среди наземных животных',
    клумба: 'Как называется участок земли, засаженный цветами?',
  };
});
