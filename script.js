const menu = document.querySelector('#start-page');
const levelList = document.querySelector('#level-list');
const levelBtns = document.querySelectorAll('.level__btn');
const startBtn = document.querySelector('.button');
const game = document.querySelector('#game-page');

// выбираем уровень, навешиваем класс active на выбранный уровень
function selectLevel(event) {
    if (event.target.classList.contains('level__btn')) {
      clearActiveClass();
      event.target.classList.add('active');
  }
}
// функция, снимающая класс active, если выбран другой уровень
function clearActiveClass() {
  levelBtns.forEach((levelBtn) => {
    levelBtn.classList.remove('active');
  })
}

levelList.addEventListener('click', selectLevel);

//функция получения выбранного уровня по атрибуту и определяющая необходимое число карт для игры
function getSelectedLevel() {
  const arrLevelBtns = Array.from(levelBtns); // переводим в массив
  const getActiveBtn = arrLevelBtns.filter(item => item.classList.contains('active')); // находим выбранный уровень
  let lvl = getActiveBtn[0].dataset.level; //получили значение атрибута выбранного уровня

  switch (lvl) {
    case '3':
      dealCards(3);
      break;
    case '6':
      dealCards(6);
      break;
    case '10':
      dealCards(10);
      game.firstElementChild.style.gridTemplateColumns ='243px 243px 243px 243px 221px';
      break;
    default:
      console.log('Опа!');
  }
}

//функция добавления карт на стол
function dealCards(cards) {
  let gamePage = document.body.children[1];
  let deck = document.createElement('div');
  gamePage.appendChild(deck);
  let deckOfCards = gamePage.firstElementChild;
  deckOfCards.classList.add('deck');
  
  for (let card = 1; card <= cards; card++) {
    let img = document.createElement('img');
    deckOfCards.appendChild(img).src = 'img/card_face_down.svg';
    let imgOfCards = deckOfCards.firstElementChild;
    imgOfCards.classList.add('cardImg');
  }
}

// начало игры
const startGame = () => {
  getSelectedLevel();
  document.body.removeChild(menu);
}

startBtn.addEventListener('click', startGame);
