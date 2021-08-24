const menu = document.querySelector('#start-page');
const levelList = document.querySelector('#level-list');
const startBtn = document.querySelector('.button');
const game = document.querySelector('#game-page');
const card = document.querySelectorAll('#cards');

levelList.addEventListener('click', event => {
  if (event.target.classList.contains('level__btn')) {
    let level = event.target.getAttribute('data-level');
    event.target.classList.add('active');

    let gamePage = document.body.children[1];
    let newCard = document.createElement('div');
    let addedCard = gamePage.firstElementChild;

    function addCards() {   
      gamePage.appendChild(newCard);
      addedCard.style.background = 'space url(img/card_face_down.svg)';
    };

    switch (level) {
      case '3':
        addCards();
        addedCard.style.width = '702px';
        addedCard.style.height = '341px';
        break;
      case '6':
        addCards();
        addedCard.style.width = '702px';
        addedCard.style.height = '706px';
        break;
      case '10':
        addCards();
        addedCard.style.width = '1186px';
        addedCard.style.height = '706px';
        break;
      default:
        console.log('Опа!')
    }
  }  
})

const startGame = () => {
  document.body.removeChild(menu);
};

startBtn.addEventListener('click', startGame);

const openCard = () => {
  
}

card.addEventListener('click', )