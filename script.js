// Wather API

const URL = "https://api.openweathermap.org/data/2.5/";

const cities = {
  524894 : "Москва",
  558418 : "Грозный",
  466990 : "Ессентуки",
  554234 : "Калининград",
  542420 : "Краснодар",
  2123628 : "Магадан",
  1497337 : "Норильск",
  487846 : "Ставрополь",
  841006 : "Кочубеевское",
  2025339 : "Чита",
  2911298 : "Гамбург",
  5342522 : "Дели",
  7280679 : "Душанбе",
  616051 : "Ереван",
  1791247 : "Ухань",
  1796236 : "Шанхай",
  703448 : "Киев"
}

// Функция getWeather получает погоду по select id города
function getWeather() {
  const cityValue = document.querySelector('#city').value;
  fetch(`${URL}weather?id=${cityValue}&units=metric&lang=ru&APPID=5fdc41711249fa4802c7d1f7dd31c676`)
  .then(weather => weather.json())
  .then(showWeather);
}

// функция showWeather показывает полученную погоду.
function showWeather(data) {
  console.log(data);
  let watherName = document.querySelector('.wather-name');
  let watherPrice =  document.querySelector('.wather-price');
  let watherDisclaimer = document.querySelector('.wather-disclaimer');
  let watherFeatures = document.querySelector('.wather-features li');
  let wind = document.querySelector('.wind');
	let pressure = document.querySelector('.pressure');
	let humidity = document.querySelector('.humidity');

  watherName.textContent = data.name;
  watherPrice.innerHTML = Math.round(data.main.temp) + ' &#8451;';
  watherDisclaimer.textContent = data.weather[0]['description'];
  watherFeatures.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  wind.textContent = ` Скорость ветра: ${data.wind.speed} m/s`;
	pressure.textContent = ` Давление: ${data.main.pressure * 0,750} mm. rt.st.`;
	humidity.textContent = ` Влажность: ${data.main.humidity} %`;
}

// Функции createOption и createOptionCity добовляют города в select меню
function createOption(city, obj) {
  city.append(createOptionCity(obj));
}


function createOptionCity(obj) {
  let value = document.querySelector('#city').value;
  if (!Object.keys(obj).length) return;

  for (let key in obj) {
    if (value != key) {
      let options = document.createElement('option');
      options.innerHTML = obj[key];
      options.setAttribute("value", key);
      cityId.append(options);
    }
  }
}

// Функция showData выводит текущую дату
function showData () {
  let dataDME = document.querySelector('.data')
  Data = new Date();
  Year = Data.getFullYear();
  Month = Data.getMonth();
  Day = Data.getDate();

  switch (Month) {
    case 0: fMonth="января"; 
    break;
    case 1: fMonth="февраля";
    break;
    case 2: fMonth="марта";
    break;
    case 3: fMonth="апреля";
    break;
    case 4: fMonth="мая";
    break;
    case 5: fMonth="июня";
    break;
    case 6: fMonth="июля";
    break;
    case 7: fMonth="августа";
    break;
    case 8: fMonth="сентября";
    break;
    case 9: fMonth="октября";
    break;
    case 10: fMonth="ноября";
    break;
    case 11: fMonth="декабря";
    break;
  }

  dataDME.textContent = `Текущая дата: ${(Day)} ${(fMonth)} ${(Year)} г.`;
}

showData();

let cityId = document.getElementById('city');
createOption(cityId, cities);

getWeather();
document.querySelector('.custom-btn').onclick = getWeather;

   