document.addEventListener('DOMContentLoaded', () => {
  const CityINput = document.getElementById('city-input')
  const BTNGetWeather = document.getElementById('get-weather-btn')
  const WheathInfo = document.getElementById('weather-info')
  const DSPCityName = document.getElementById('city-name')
  const DSPCityTemp = document.getElementById('temperature')
  const DSPCityDesc = document.getElementById('description')
  const Err = document.getElementById('error-message')

  const API_KEY = "7017e333083dd28783293e8a5ef9c90d"

  const btn = BTNGetWeather.addEventListener('click', async () => {
    const city = CityINput.value.trim()

    if(!city) return;

    //It may throw an error 
    //Server/DB are always in another planet

    try {
     const weatherdata = await fetchweatherdata(city)
     dspweatherdata(weatherdata)
    //  delbtn()
    } catch(error) {
        dspError()
    }
  
  
})

// function delbtn(){
//   if(BTNGetWeather.textContent = "Delete") {
//       BTNGetWeather.style.backgroundColor = "red"
//       BTNGetWeather.addEventListener('click', async () => {
//         CityINput.value = "";
//         DSPCityDesc.textContent = "";
//         DSPCityName.textContent = "";
//         DSPCityTemp.textContent = "";
//       })
//      }
// }

async function fetchweatherdata(city) {
  //get data

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

  const response = await fetch(url)

  console.log("Response", response)
  console.log(typeof response)

  if(!response.ok) {
    CityINput.value = "";
    throw new Error("City not found");    
  }
     const data = await response.json();
     return data;
}


function dspweatherdata(wdata){
  console.log(wdata);

  const {name, sys:{country}, main, weather} = wdata;

  DSPCityName.textContent = `City: ${name}`;
  // DSPCityDesc.textContent = country;
  DSPCityDesc.textContent = `Description: ${weather[0].description}`
  DSPCityTemp.textContent = `Temp: ${main.temp}`;
  
  WheathInfo.classList.remove('hidden')
  Err.classList.add('hidden')

}

function dspError() {
  WheathInfo.classList.add('hidden')
  Err.classList.remove('hidden')
}


});


