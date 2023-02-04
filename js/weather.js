const API_KEY = "b3d83e768739dddb7f91adb24b9a601d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const country = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      country.innerText = data.sys.country;
      weather.innerText = `${data.main.temp}ºC`;
    });
}

function onGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
