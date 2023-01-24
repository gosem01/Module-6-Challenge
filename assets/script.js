const APIKey = "7c724132c16adcc022a4af6e24c9c414";

function searchAndSaveToHistory() {
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

}