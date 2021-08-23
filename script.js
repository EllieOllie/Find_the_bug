const menu = document.querySelector('#start-page');
const levelList = document.querySelector('#level-list');
const levelBtn = document.querySelectorAll('.level__btn');
const startBtn = document.querySelector('.button');
const mainTable = document.querySelector('.main');
const cardFaceDown = document.querySelector('#cardFaceDown');


const getLevel = function() {
  console.log('это сообщение появляется в консоли');
  if (menu.target.classList.contains('level__btn')) {
    let level = menu.target.dataset('data-level');
    level.classList.toggle('active');
    console.log('а это нет');
  }
}

levelList.addEventListener('click', getLevel);

const clickStartGame = () => {
  console.log('GO!')
  document.body.removeChild(menu);
  
  // getLevel.levellList.forEach(level => {
  //   level = 3
  // });

  document.body.appendChild(cardFaceDown);
}

startBtn.addEventListener('click', clickStartGame);




