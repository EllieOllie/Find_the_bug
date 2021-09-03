const body = document.querySelector(".body");
const menu = document.querySelector("#start-page");
const levelList = document.querySelector("#level-list");
const levelBtns = document.querySelectorAll(".lvl__btn");
const startBtn = document.querySelector(".button");
const game = document.querySelector("#game-page");

// Выбор уровня (выбираем, навешиваем класс active на выбранный уровень)
levelList.addEventListener("click", function (event) {
  if (event.target.classList.contains("lvl__btn")) {
    levelBtns.forEach((levelBtn) => levelBtn.classList.remove("active")); // cнимает класс active, если выбран другой уровень
    event.target.classList.add("active");
  }
});

//функция добавления карт на стол
function dealCards(cards) {
  let flip = document.createElement("div");
  game.appendChild(flip);
  flip.classList.add("flip-card");
  
  for (let card = 1; card <= cards; card++) {

    let flipInner = document.createElement("div");
    flip.appendChild(flipInner);
    flipInner.classList.add("flip-card-inner");

    let frontFlip = document.createElement("div");
    flipInner.appendChild(frontFlip);
    frontFlip.classList.add("card__front-flip");

    let imgCardFaceDown = document.createElement("img");
    frontFlip.appendChild(imgCardFaceDown).src = "img/card_face_down.png";
    imgCardFaceDown.classList.add("CardFaceDown");

    let backFlip = document.createElement("div");
    flipInner.appendChild(backFlip);
    backFlip.classList.add("card__back-flip");

    let imgCardGameOver = document.createElement("img");
    backFlip.appendChild(imgCardGameOver).src = "img/card_Game_over.png";
    imgCardGameOver.classList.add("CardGameOver");
  }
}

//функция получения выбранного уровня по атрибуту, определяющая необходимое число карт для игры
function getSelectedLevel() {
  //сначала переводим в массив, затем filter находим выбранный уровень с классом active и получаем значение атрибута выбранного уровня
  const lvl = Array.from(levelBtns).filter((item) => item.classList.contains("active"))[0].dataset.level;
  switch (lvl) {
    case "3":
      dealCards(3);
      break;
    case "6":
      dealCards(6);
      break;
    case "10":
      dealCards(10);
      game.firstElementChild.classList.add("grid-cards10");
      break;
    // default:
    //   console.log("Опа!"");
  }
}

// функция удаления главного меню и добавления игрового поля
function hideMenu() {
  body.removeChild(menu);
  game.style.display = "flex";
}
// переворачиваем карты
function rotateCard() {
  // получаем все карты выбранного уровня
  const flipCardInner = document.querySelectorAll(".flip-card-inner");
  
  // функция, убирающая ховер при клике на карту
  function removeHover() {
    const hoverCard = document.querySelector(".CardFaceDown:hover");
    hoverCard.style.animation = "none";
  }

  // выбираем карту, навешиваем класс flip при клике на выбранную карту
  flipCardInner.forEach((card) => card.addEventListener("click", () => {
    card.classList.toggle("flip");

      // функция получения рандомного положения карты с багом
      function getRandomCard() {
      let min = 1;
      let max = document.querySelectorAll(".flip-card-inner").length;
      return Math.floor(Math.random()*(max - min + min));
    }

    // функция замены одной карты на карту с багом
    function replaceCard() {
      let index = getRandomCard();
      let oldCard = document.querySelectorAll(".CardGameOver");
      oldCard[index].src = "img/card_with_BUG.png";
      // console.log(`Баг находится под картой № ${parseInt(index+1)}`);      
    }    

    removeHover();
    replaceCard();

    // функция удаления игрового поля и добавления главного меню
    function hideGamePage() {
      body.removeChild(game);
      location.reload();
    }

    //перезагрузка при клике на любую карту после окончания игры
    flipCardInner.forEach((card) => card.addEventListener("click", hideGamePage));
  }));
}

// начало игры
const startGame = () => {
  getSelectedLevel();
  hideMenu();
  rotateCard();
};

startBtn.addEventListener("click", startGame);
