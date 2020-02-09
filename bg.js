const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.png`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRanddom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRanddom();
  paintImage(randomNumber);
}

init();
