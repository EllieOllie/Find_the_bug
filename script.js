const menu = document.querySelector('#start-page');
const levelList = document.querySelector('#level-list');
const levelBtn = document.querySelectorAll('.level__btn').value;
const startBtn = document.querySelector('.button');
const mainTable = document.querySelector('.main');
const cardFaceDown = document.querySelector('#cardFaceDown');

console.log(levelBtn);

// let activeLevelIndex = 0 // переменная, которая позволяет следить за тем, какой уровень сейчас активный


// const LevelSimple = levelBtn[0].dataset.level;
// console.log(LevelSimple);

// const LevelMiddle = levelBtn[1].dataset.level;
// console.log(LevelMiddle);

// const LevelHard = levelBtn[2].dataset.level;
// console.log(LevelHard);


levelList.addEventListener('click', event => event.target.classList.add('active'));



// const LevelListBtn = levelList.children;
// console.log(LevelListBtn); // получили массив из уровней

// const LevelListBtn1 = levelList.firstElementChild;
// console.log(LevelListBtn1); // получили первый уровень

// const LevelListBtn2 = levelList.children[1];
// console.log(LevelListBtn2); // получили второй уровень

// const LevelListBtn3 = levelList.lastElementChild;
// console.log(LevelListBtn3); // получили третий уровень



const clickStartGame = () => {
  document.body.removeChild(menu);
  choiceLevel();
  // if (levelBtn.classList = 'active') {
  //   document.body.appendChild(cardFaceDown);
  // } else {
  //   console.log('Опа!')
  // }
};

const choiceLevel = () => {
  let level = levelBtn.classList.contains('active');
  // let level = levelBtn.dataset.level;
  switch (level) {
    case '3':
      document.body.appendChild(cardFaceDown);
      break;
    case '6':
      document.body.appendChild(cardFaceDown);
      break;
    case '10':
      document.body.appendChild(cardFaceDown);
      break;
    default:
      console.log('Опа!')
  }
}


startBtn.addEventListener('click', clickStartGame);





