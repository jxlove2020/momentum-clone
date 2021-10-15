const API_KEY = 'f0ba16b1ba6918690fe9aac76a660cf4';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('You live in ', lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.name, data.weather[0].main);

      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');

      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp} ℃ `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
