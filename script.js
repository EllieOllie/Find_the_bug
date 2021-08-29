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
  const lvl = Array.from(levelBtns).filter(item => item.classList.contains('active'))[0].dataset.level; //сначала переводим в массив, затем filter находим выбранный уровень с классом active и получили значение атрибута выбранного уровня

  //тоже самое ПРОВЕРИТЬ! не работает!
  // const lvl = document.querySelector('.active');

  switch (lvl) {
    case '3':
      dealCards(3);
      break;
    case '6':
      dealCards(6);
      break;
    case '10':
      dealCards(10);
      game.firstElementChild.style.gridTemplateColumns ='243px 243px 243px 243px 243px';
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
  deck.classList.add('deck');
  
  for (let card = 1; card <= cards; card++) {

    let flip = document.createElement('div');
    deck.appendChild(flip);
    flip.classList.add('flip-card');

    let flipInner = document.createElement('div');
    flip.appendChild(flipInner);
    flipInner.classList.add('flip-card-inner');

    let frontFlip = document.createElement('div');
    flipInner.appendChild(frontFlip);
    frontFlip.classList.add('card__front-flip');

    let imgCardFaceDown = document.createElement('img');
    frontFlip.appendChild(imgCardFaceDown).src = 'img/card_face_down.svg';
    imgCardFaceDown.classList.add('CardFaceDown');


    let backFlip = document.createElement('div');
    flipInner.appendChild(backFlip);
    backFlip.classList.add('card__back-flip');

    let imgCardGameOver = document.createElement('img');
    backFlip.appendChild(imgCardGameOver).src = 'img/card_Game_over.svg';
    imgCardGameOver.classList.add('CardGameOver');
  }
}

// выбираем карту, навешиваем класс flip на выбранную карту
function getCard() {
  const flipCardInner = document.querySelectorAll('.flip-card-inner');

  flipCardInner.forEach(function(card) {
    card.addEventListener('click', () => card.classList.toggle('flip'));
  });
}

// начало игры
const startGame = () => {
  getSelectedLevel();

  document.body.removeChild(menu);

  game.style.display = 'flex';
  game.style.justifyContent = 'center';
  game.style.alignItems = 'center';
  game.style.height = '66vh';

  getCard();
}

startBtn.addEventListener('click', startGame);

