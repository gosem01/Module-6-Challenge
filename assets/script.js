const APIKey = "7c724132c16adcc022a4af6e24c9c414";

async function searchAndSaveToHistory() {

    if(document.getElementById('weatherToday') !== null) {
        document.getElementById('weatherToday').remove();
    }
    if(document.getElementById('forecastDay1') !== null) {
        document.getElementById('forecastDay1').remove();
    }
    if(document.getElementById('forecastDay2') !== null) {
        document.getElementById('forecastDay2').remove();
    }
    if(document.getElementById('forecastDay3') !== null) {
        document.getElementById('forecastDay3').remove();
    }
    if(document.getElementById('forecastDay4') !== null) {
        document.getElementById('forecastDay4').remove();
    }
    if(document.getElementById('forecastDay5') !== null) {
        document.getElementById('forecastDay5').remove();
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
    var todaysWeatherIcon;

    await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 
        searchedLoction + 
        "&appid=" + APIKey + 
        "&units=imperial")
        .then((response) => response.json())
        .then(response => {todaysWeatherData = response;})
        .then(() => console.log(todaysWeatherData));

    todaysTemp = todaysWeatherData.main.temp;
    todaysWind = todaysWeatherData.wind.speed;
    todaysHumidity = todaysWeatherData.main.humidity;
    cityName = todaysWeatherData.name;
    todaysWeatherIcon = todaysWeatherData.weather[0].icon

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
    todayHeading.innerHTML = cityName + " (" + getCurrentDate() + ") " + "<img src='" + "https://openweathermap.org/img/wn/" + todaysWeatherIcon + ".png'>";

    var todayTemp = document.createElement('p');
    document.getElementById('weatherToday').appendChild(todayTemp);
    todayTemp.innerHTML = "Temp: " + todaysTemp + "??F";

    var todayWind = document.createElement('p');
    document.getElementById('weatherToday').appendChild(todayWind);
    todayWind.innerHTML = "Wind: " + todaysWind + " MPH";

    var todayHumidity = document.createElement('p');
    document.getElementById('weatherToday').appendChild(todayHumidity);
    todayHumidity.innerHTML = "Humidity: " + todaysHumidity + " %";

    var forecastedWeatherData;

    await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + 
        searchedLoction + 
        "&appid=" + APIKey + 
        "&units=imperial")
        .then((response) => response.json())
        .then(response => {forecastedWeatherData = response;})
        .then(() => console.log(forecastedWeatherData));

    console.log(forecastedWeatherData.list.length);

    document.getElementById('5-day-heading').setAttribute('style', 'display: visible');

    var date;
    var temp;
    var wind;
    var humidity;
    var dateObject;

    var forecastDay1Element = document.createElement('div');
    forecastDay1Element.setAttribute('id', 'forecastDay1');
    forecastDay1Element.setAttribute('class', 'forecast-result-style');
    document.getElementById('fiveDayResult').appendChild(forecastDay1Element);
    dateObject = new Date(forecastedWeatherData.list[0].dt_txt);
    date = document.createElement('p');
    date.innerHTML = dateObject.toLocaleDateString() + "<br><img src='" + "https://openweathermap.org/img/wn/" + forecastedWeatherData.list[0].weather[0].icon + ".png'>";
    temp = document.createElement('p');
    temp.innerHTML = 'Temp: ' + forecastedWeatherData.list[0].main.temp + "??F";
    wind = document.createElement('p');
    wind.innerHTML = 'Wind: ' + forecastedWeatherData.list[0].wind.speed + " MPH";
    humidity = document.createElement('p');
    humidity.innerHTML = 'Temp: ' + forecastedWeatherData.list[0].main.humidity + " %";
    document.getElementById('forecastDay1').appendChild(date);
    document.getElementById('forecastDay1').appendChild(temp);
    document.getElementById('forecastDay1').appendChild(wind);
    document.getElementById('forecastDay1').appendChild(humidity);
    
    var forecastDay2Element = document.createElement('div');
    forecastDay2Element.setAttribute('id', 'forecastDay2');
    forecastDay2Element.setAttribute('class', 'forecast-result-style');
    document.getElementById('fiveDayResult').appendChild(forecastDay2Element);
    dateObject = new Date(forecastedWeatherData.list[6].dt_txt);
    date = document.createElement('p');
    date.innerHTML = dateObject.toLocaleDateString() + "<br><img src='" + "https://openweathermap.org/img/wn/" + forecastedWeatherData.list[6].weather[0].icon + ".png'>";
    temp = document.createElement('p');
    temp.innerHTML = 'Temp: ' + forecastedWeatherData.list[6].main.temp + "??F";
    wind = document.createElement('p');
    wind.innerHTML = 'Wind: ' + forecastedWeatherData.list[6].wind.speed + " MPH";
    humidity = document.createElement('p');
    humidity.innerHTML = 'Temp: ' + forecastedWeatherData.list[6].main.humidity + " %";
    document.getElementById('forecastDay2').appendChild(date);
    document.getElementById('forecastDay2').appendChild(temp);
    document.getElementById('forecastDay2').appendChild(wind);
    document.getElementById('forecastDay2').appendChild(humidity);

    var forecastDay3Element = document.createElement('div');
    forecastDay3Element.setAttribute('id', 'forecastDay3');
    forecastDay3Element.setAttribute('class', 'forecast-result-style');
    document.getElementById('fiveDayResult').appendChild(forecastDay3Element);
    dateObject = new Date(forecastedWeatherData.list[14].dt_txt);
    date = document.createElement('p');
    date.innerHTML = dateObject.toLocaleDateString() + "<br><img src='" + "https://openweathermap.org/img/wn/" + forecastedWeatherData.list[14].weather[0].icon + ".png'>";
    temp = document.createElement('p');
    temp.innerHTML = 'Temp: ' + forecastedWeatherData.list[14].main.temp + "??F";
    wind = document.createElement('p');
    wind.innerHTML = 'Wind: ' + forecastedWeatherData.list[14].wind.speed + " MPH";
    humidity = document.createElement('p');
    humidity.innerHTML = 'Temp: ' + forecastedWeatherData.list[14].main.humidity + " %";
    document.getElementById('forecastDay3').appendChild(date);
    document.getElementById('forecastDay3').appendChild(temp);
    document.getElementById('forecastDay3').appendChild(wind);
    document.getElementById('forecastDay3').appendChild(humidity);

    var forecastDay4Element = document.createElement('div');
    forecastDay4Element.setAttribute('id', 'forecastDay4');
    forecastDay4Element.setAttribute('class', 'forecast-result-style');
    document.getElementById('fiveDayResult').appendChild(forecastDay4Element);
    dateObject = new Date(forecastedWeatherData.list[22].dt_txt);
    date = document.createElement('p');
    date.innerHTML = dateObject.toLocaleDateString() + "<br><img src='" + "https://openweathermap.org/img/wn/" + forecastedWeatherData.list[22].weather[0].icon + ".png'>";
    temp = document.createElement('p');
    temp.innerHTML = 'Temp: ' + forecastedWeatherData.list[22].main.temp + "??F";
    wind = document.createElement('p');
    wind.innerHTML = 'Wind: ' + forecastedWeatherData.list[22].wind.speed + " MPH";
    humidity = document.createElement('p');
    humidity.innerHTML = 'Temp: ' + forecastedWeatherData.list[22].main.humidity + " %";
    document.getElementById('forecastDay4').appendChild(date);
    document.getElementById('forecastDay4').appendChild(temp);
    document.getElementById('forecastDay4').appendChild(wind);
    document.getElementById('forecastDay4').appendChild(humidity);

    var forecastDay5Element = document.createElement('div');
    forecastDay5Element.setAttribute('id', 'forecastDay5');
    forecastDay5Element.setAttribute('class', 'forecast-result-style');
    document.getElementById('fiveDayResult').appendChild(forecastDay5Element);
    dateObject = new Date(forecastedWeatherData.list[30].dt_txt);
    date = document.createElement('p');
    date.innerHTML = dateObject.toLocaleDateString() + "<br><img src='" + "https://openweathermap.org/img/wn/" + forecastedWeatherData.list[30].weather[0].icon + ".png'>";
    temp = document.createElement('p');
    temp.innerHTML = 'Temp: ' + forecastedWeatherData.list[30].main.temp + "??F";
    wind = document.createElement('p');
    wind.innerHTML = 'Wind: ' + forecastedWeatherData.list[30].wind.speed + " MPH";
    humidity = document.createElement('p');
    humidity.innerHTML = 'Temp: ' + forecastedWeatherData.list[30].main.humidity + " %";
    document.getElementById('forecastDay5').appendChild(date);
    document.getElementById('forecastDay5').appendChild(temp);
    document.getElementById('forecastDay5').appendChild(wind);
    document.getElementById('forecastDay5').appendChild(humidity);

}

function getCurrentDate() {
    const options = {day: "numeric", month: "numeric", year: "numeric"};
    var currentDate = new Date(Date.now());
    var date = currentDate.toLocaleDateString("en-US", options)
    return date;
}