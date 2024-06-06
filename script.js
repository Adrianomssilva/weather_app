const apiKey =  "dbd2dd913ececc6fc17445cec71060df";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector('#search')
const searchBtn = document.querySelector('#btn')
let weatherImg = document.querySelector('#weatherimg')

async function checkWeather (query){
  const response = await fetch (apiUrl + query + `&appid=${apiKey}`)
  let data = await response.json()
  document.querySelector("#city").innerHTML = data.name
  document.querySelector("#temp").innerHTML = `${Math.round(data.main.temp)}°C`
  document.querySelector("#humidity").innerHTML = `${data.main.humidity}%`
  document.querySelector("#wind").innerHTML = `${data.wind.speed} km/h`
    if(data.weather[0].main == 'Clouds'){
      weatherImg.src = 'img/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
      weatherImg.src = 'img/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
      weatherImg.src = 'img/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
      weatherImg.src = 'img/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
      weatherImg.src = 'img/mist.png'
    }
    else if(data.weather[0].main == 'Snow'){
      weatherImg.src = 'img/snow.png'
    }
  }

  searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
  })