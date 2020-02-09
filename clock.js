const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");
const dateTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    min < 10 ? `0${min}` : min
  } : ${sec < 10 ? `0${sec}` : sec}`;
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  dateTitle.innerText = `${year}.${month < 10 ? `0${month}` : month}.${
    day < 10 ? `0${day}` : day
  }`;
}

function init() {
  getTime();
  getDate();
  setInterval(getTime, 1000);
}

init();
