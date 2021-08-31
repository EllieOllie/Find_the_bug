const body = document.querySelector('.body');
const menu = document.querySelector('#start-page');
const levelList = document.querySelector('#level-list');
const levelBtns = document.querySelectorAll('.level__btn');
const startBtn = document.querySelector('.button');
const game = document.querySelector('#game-page');

// функция выбора уровня (выбираем, навешиваем класс active на выбранный уровень)
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
  //сначала переводим в массив, затем filter находим выбранный уровень с классом active и получили значение атрибута выбранного уровня
  const lvl = Array.from(levelBtns).filter(item => item.classList.contains('active'))[0].dataset.level; 
  switch (lvl) {
    case '3':
      dealCards(3);
      break;
    case '6':
      dealCards(6);
      break;
    case '10':
      dealCards(10);
      game.firstElementChild.style.gridTemplateColumns ='17vw 17vw 17vw 17vw 17vw';
      break;
    default:
      console.log('Опа!');
  }
}

//функция добавления карт на стол
function dealCards(cards) {
  let deck = document.createElement('div');
  game.appendChild(deck);
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

// функция удаления главного меню и добавления игрового поля
function hideMenu() {
  body.removeChild(menu);
  [game.style.display, game.style.justifyContent, game.style.alignItems, game.style.height] = ['flex', 'center', 'center', '66vh'];
}

function rotateCard() {
  const flipCardInner = document.querySelectorAll('.flip-card-inner');
  
  // выбираем карту, навешиваем класс flip при клике на выбранную карту
  flipCardInner.forEach(card => card.addEventListener('click', () => {
    card.classList.toggle('flip');
    rotate();
    replaceCard();

    // функция получения рандомного положения карты с багом
    function getRandomCard() {
      const numbersOfCards = document.querySelectorAll('.flip-card').length;
      min = 1
      max = numbersOfCards;
      return Math.floor(Math.random()*(max - min + min));
    }

    // функция замены одной карты на карту с багом
    function replaceCard() {
      let index = getRandomCard();
      console.log(`Баг находится под картой № ${parseInt(index+1)}`);
      let oldCard = document.querySelectorAll('.CardGameOver');
      oldCard[index].src = 'img/card_with_BUG.svg';
    }
    
    // функция удаления игрового поля и добавления главного меню
    function hideGamePage() {
      body.removeChild(game);
      location.reload();
    }

    document.querySelector('.flip').addEventListener('click', hideGamePage);
  }));
  
  // функция, убирающая ховер при клике на карту
  function rotate() {
    const hoverCard = document.querySelector('.CardFaceDown:hover');
    hoverCard.style.animation = 'none';
  }
}

// начало игры
const startGame = () => {
  getSelectedLevel();
  hideMenu();
  rotateCard();
}

startBtn.addEventListener('click', startGame);
