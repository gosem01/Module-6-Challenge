const APIKey = "7c724132c16adcc022a4af6e24c9c414";

function searchAndSaveToHistory() {

    if(document.getElementById('weatherToday') !== null) {
        document.getElementById('weatherToday').remove();
    }

    var searchedLoction = document.getElementById('search-field').value;
    console.log(searchedLoction);

    var p = document.createElement('p');
    p.innerHTML = searchedLoction;
    document.getElementById('search-history').appendChild(p);

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + 
        searchedLoction + 
        "&appid=" + APIKey + 
        "&units=imperial")
        .then((response) => response.json())
        .then((data) => console.log(data));

    var todaysTemp;
    var todaysWind;
    var todaysHumidity;

    var todaysResult = document.createElement('div');
    todaysResult.setAttribute('id', 'weatherToday');
    todaysResult.setAttribute('class', 'today-result-style')
    document.getElementById('currentDayResult').appendChild(todaysResult);

    document.getElementById('weatherToday').appendChild(p);
    p.innerHTML = searchedLoction + " (" + getCurrentDate() + ")";

}

function getCurrentDate() {
    const options = {day: "numeric", month: "numeric", year: "numeric"};
    var currentDate = new Date(Date.now());
    var date = currentDate.toLocaleDateString("en-US", options)
    return date;
}