const weather = document.querySelector(".js-weather");

const API_KEY = "519b01d0f7f4d19b87ef4e2566dd5b4b";
const COORDS = "croods";

function getWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp} @ ${place}`;
    });
}

function saveCroods(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCroods(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoord() {
  const loadedCoord = localStorage.getItem(COORDS);
  if (loadedCoord === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoord);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoord();
}

init();
