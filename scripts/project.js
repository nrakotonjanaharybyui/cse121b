// Set Variables
let cityList;
let displayContainer = document.querySelector('#Forecast');

// Start search for city
function searchCity(){
    displayContainer.innerHTML = "";
    let cityName = document.querySelector('#placeName');
    let title = document.querySelector('h2');
    let cityTarget = cityName.value;
    if(cityTarget.length > 0){
        title.innerHTML = `Weather information for "${cityTarget}"`;
        searchCityInfo(cityTarget);
    }
    else{
        // Display error message
        title.innerHTML = 'Please provide a city name';
    }
    // Clearing input field
    cityName.value = '';
    
}

// Get city Location from API
function searchCityInfo(cityTarget){
    let url = `https://api.api-ninjas.com/v1/geocoding?city=${cityTarget}`;
    const request = new XMLHttpRequest;
    request.open('GET', url);
    request.setRequestHeader('X-Api-Key', 'iCKCfBUHmM0ZIuMpVdHuUQ==o2RekI9Wnb4kE3HX')
    request.send();
    // response listener
    request.addEventListener('readystatechange', () =>{
        if(request.readyState === 4 && request.status === 200){
            cityList = JSON.parse(request.responseText);
            // Then search weather info for each city in the array
            searchWeather(cityList);
        }
        else{
            // Response error handling
        }
    });
}

// Get city weather info
function searchWeather(cityList){
    cityList.forEach(element => {
        let latitude = element.latitude;
        let longitude = element.longitude;
        let country = element.country;
        let state = element.state;
        let name = element.name;
        // console.log(`${name} is located ${latitude} and ${longitude} in ${state}, ${country}`);
        let url =   `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1`;      
        getWeather(url, name, state, country);
    });

}

let getWeather = async (url, name, state, country) => {
    let response = await fetch(url);

    if(response.ok){
        let result = await response.json();
        display(result, name, state, country);
    }
}

// Display information in assigned areas
function display(result, name, state, country){
    let node = document.createElement('div');
    let data = result.current;
    node.classList.add('CityDetail');
    
    // Adding title
    let title = document.createElement('h3');
    title.innerText = `${name}, ${state}, ${country}`;
    node.appendChild(title);

    // Adding temperature
    let temp2mF = data.temperature_2m;
    let temp2mC = toCelcius(temp2mF);
    let tempApp = data.apparent_temperature;
    let temperature = document.createElement('div');
    temperature.classList.add('CityTemp');
    temperature.innerHTML = `<p>Temperature:</br><span class="TempMain">${temp2mF}</span> °F <span class="TempCelc"> ${temp2mC}°C </span></p>`;
    temperature.innerHTML += `<p>Apparent temperature: ${tempApp}°F</p>`;
    node.appendChild(temperature);

    // Addin weather description
    let weatherCode = data.weather_code;
    let descrText = describe(weatherCode);
    let description = document.createElement('div');
    description.classList.add('WeatherDescription');
    description.innerHTML = `<p>${descrText}</p>`;
    node.appendChild(description);

    // Adding wind info
    let windSpeed = data.wind_speed_10m;
    let windAngle = data.wind_direction_10m;
    let windDirection = giveDirection(windAngle);
    let wind = document.createElement('div');
    wind.classList.add('Wind');
    wind.innerHTML = `<p>Wind Speed:</br><span class="WindMain">${windSpeed}</span> mph <span class="WindDirection"> ${windDirection} </span></p>`;
    node.appendChild(wind);

    //Add elements to diplaying container
    displayContainer.appendChild(node);

    
}


// Display callback functions
let toCelcius = (temp) => ((temp - 32)*5/9).toFixed(2);

function describe(code){
    let description = "";
    switch(code){
        case 0:
            description = "Clear sky";
            break;
        case 1:
            description = "Mainly clear, partly cloudy, and overcast";
            break;
        case 2:
            description = "Mainly clear, partly cloudy, and overcast";
            break;
        case 3:
            description = "Mainly clear, partly cloudy, and overcast";
            break;
        case 45:
            description = "Fog and depositing rime fog";
            break;
        case 48:
                description = "Fog and depositing rime fog";
                break;
        case 51:
            description = "Drizzle: Light, moderate, and dense intensity";
            break;
        case 53:
            description = "Drizzle: Light, moderate, and dense intensity";
            break;
        case 55:
            description = "Drizzle: Light, moderate, and dense intensity";
            break;
        case 56:
            description = "Freezing Drizzle: Light and dense intensity";
            break;
        case 57:
            description = "Freezing Drizzle: Light and dense intensity";
            break;
        case 61:
            description = "Rain: Slight, moderate and heavy intensity";
            break;
        case 63:
            description = "Rain: Slight, moderate and heavy intensity";
            break;
        case 65:
            description = "Rain: Slight, moderate and heavy intensity";
            break;
        case 66:
            desription = "Freezing Rain: Light and heavy intensity";
            break;
        case 67:
            desription = "Freezing Rain: Light and heavy intensity";
            break;
        case 71:
            description = "Snow fall: Slight, moderate, and heavy intensity";
            break;
        case 73:
            description = "Snow fall: Slight, moderate, and heavy intensity";
            break;
        case 75:
            description = "Snow fall: Slight, moderate, and heavy intensity";
            break;
        case 77:
            description = "Snow grains";
            break;
        case 80:
            description = "Rain showers: Slight, moderate, and violent";
            break;
        case 81:
            description = "Rain showers: Slight, moderate, and violent";
            break;
        case 82:
            description = "Rain showers: Slight, moderate, and violent";
            break;
        case 85:
            description = "Snow showers slight and heavy";
            break;
        case 86:
            description = "Snow showers slight and heavy";
            break;
        case 95:
            description = "Thunderstorm: Slight or moderate";
            break;
        case 96:
            description = "Thunderstorm with slight and heavy hail";
            break;
        case 99:
            description = "Thunderstorm with slight and heavy hail";
            break;
        default:
            description = "Weather description not available";

    }
    return description;
}

function giveDirection(angle) {
    if(angle >= 349 && angle <= 11){
            return +angle + "° | N";
    } else if (angle >= 12 && angle <= 33) {
            return +angle + "° | NNE";
    } else if (angle >= 34 && angle <= 56) {
            return +angle + "° | NE";
    } else if (angle >= 57 && angle <= 78) {
            return +angle + "° | ENE";
    } else if (angle >= 79 && angle <= 101) {
            return +angle + "° | E";
    } else if (angle >= 102 && angle <= 123) {
            return +angle + "° | ESE";
    } else if (angle >= 124 && angle <= 146) {
            return +angle + "° | SE";
    } else if (angle >= 147 && angle <= 168) {
            return +angle + "° | SSE";
    } else if (angle >= 169 && angle <= 191) {
            return +angle + "° | S";
    } else if (angle >= 192 && angle <= 213) {
            return +angle + "° | SSW";
    } else if (angle >= 214 && angle <= 236) {
            return +angle + "° | SW";
    } else if (angle >= 237 && angle <= 258) {
            return +angle + "° | WSW";
    } else if (angle >= 259 && angle <= 281) {
            return +angle + "° | W";
    } else if (angle >= 282 && angle <= 303) {
            return +angle + "° | WNW";
    } else if (angle >= 304 && angle <= 326) {
            return +angle + "° | NW";
    } else if (angle >= 327 && angle <= 348) {
            return +angle + "° | NNW";
    }
}

// Populate with default values
searchCityInfo('Rexburg');

// Event listener
document.querySelector('#searchPlace').addEventListener('click', searchCity);