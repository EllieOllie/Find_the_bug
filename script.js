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


  // let arrAttrBtn = arrLevelBtns.map(item => item.dataset.level); //получаем массив из data-атрибутов
  //перебрали атрибуты уровней
  // for (let lvls of arrAttrBtn) {
  //   console.log(lvls);
  // }


  switch (lvl) {
    case '3':
      console.log('Опа 3!')
      // dealCards(3);
      break;
    case '6':
      console.log('Опа 6!')
      // dealCards(6);
      break;
    case '10':
      console.log('Опа 10!')
      // dealCards(10);
      break;
    default:
      console.log('Опа хз!')
  }
}

const startGame = () => {
  getSelectedLevel();
  document.body.removeChild(menu);
  game.style.display = flex;
};

startBtn.addEventListener('click', startGame);






//добавление карт на стол
// let gamePage = document.body.children[1];
// let deck = document.createElement('div');
// gamePage.appendChild(deck);
// let deckOfCards = gamePage.firstElementChild;
// deckOfCards.classList.add('deck');
// let putCards = document.createElement('img');
// gamePage.appendChild(putCards).src = 'img/card_face_down.svg';



// function dealCards(cards) {
  
//   let card = [
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg',
//   'img/card_face_down.svg'
// ];

//   for (let numberOfCards = 0; numberOfCards <= cards; numberOfCards++) {
//     let deck = document.createElement('div');
//     let cards = document.createElement('img');
//     cards.src = card[x];
//     deck.setAttribute("class", "deck");
//       deck.appendChild(cards);
//       x++;
//         document.querySelector("#cards").appendChild(deck);
//   }
// };

// dealCards();











