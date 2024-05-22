const API_KEY = "b8f91ac8e48fc0f99e2a4634cded8a9a ";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = data.name;
    })
  );
}

function onGeoError() {
  alert("Can't find you, No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
