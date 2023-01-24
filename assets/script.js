const APIKey = "7c724132c16adcc022a4af6e24c9c414";

function searchAndSaveToHistory() {
    var searchedLoction = document.getElementById('search-field').value;
    console.log(searchedLoction);

    var p = document.createElement('p');
    p.innerHTML = searchedLoction;
    document.getElementById('search-history').appendChild(p);

}