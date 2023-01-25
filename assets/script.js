const APIKey = "7c724132c16adcc022a4af6e24c9c414";

async function searchAndSaveToHistory() {

    if(document.getElementById('weatherToday') !== null) {
        document.getElementById('weatherToday').remove();
    }

    var searchedLoction = document.getElementById('search-field').value;
    console.log(searchedLoction);

    var p = document.createElement('p');
    p.innerHTML = searchedLoction;
    document.getElementById('search-history').appendChild(p);

    var todaysWeatherData;
    var todaysTemp;
    var todaysWind;
    var todaysHumidity;

    await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + 
        searchedLoction + 
        "&appid=" + APIKey + 
        "&units=imperial")
        .then((response) => response.json())
        .then(response => {todaysWeatherData = response;})
        // .then((data) => {
        //     todaysWeatherData = data;
        // })
        // .then((data) => console.log(data));
        .then(() => console.log(todaysWeatherData));
            // todaysTemp = $(todaysWeatherData.main.temp)

    // todaysWeatherData = await response.json();

    todaysTemp = todaysWeatherData.main.temp;
    todaysWind = todaysWeatherData.wind.speed;
    todaysHumidity = todaysWeatherData.main.humidity;
    cityName = todaysWeatherData.name;

    console.log(todaysTemp);
    console.log(todaysWind);
    console.log(todaysHumidity);
    console.log(cityName);

    var todaysResult = document.createElement('div');
    todaysResult.setAttribute('id', 'weatherToday');
    todaysResult.setAttribute('class', 'today-result-style')
    document.getElementById('currentDayResult').appendChild(todaysResult);

    var todayHeading = document.createElement('p');
    document.getElementById('weatherToday').appendChild(todayHeading);
    todayHeading.innerHTML = cityName + " (" + getCurrentDate() + ")";

    var todayTemp = document.createElement('p');
    document.getElementById('weatherToday').appendChild(todayTemp);
    todayTemp.innerHTML = "Temp: " + todaysTemp + "°F";

    var todayWind = document.createElement('p');
    document.getElementById('weatherToday').appendChild(todayWind);
    todayWind.innerHTML = "Wind: " + todaysWind + " MPH";

    var todayHumidity = document.createElement('p');
    document.getElementById('weatherToday').appendChild(todayHumidity);
    todayHumidity.innerHTML = "Humidity: " + todaysHumidity + " %";
    
    // document.getElementById('weatherToday').appendChild(p);
    // p.innerHTML = "Temp: " + todaysTemp + "F";
    // document.getElementById('weatherToday').appendChild(p);
    // p.innerHTML = "Wind: " + todaysWind + "MPH";
    // document.getElementById('weatherToday').appendChild(p);
    // p.innerHTML = "Humidity: " + todaysHumidity + "%";

}

function getCurrentDate() {
    const options = {day: "numeric", month: "numeric", year: "numeric"};
    var currentDate = new Date(Date.now());
    var date = currentDate.toLocaleDateString("en-US", options)
    return date;
}