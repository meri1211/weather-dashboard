// creating a city variable that would reflect the chosen city by the user
let userCity = "Cairo";
// the Api key from Open Weather
let apiKey = "228a49a68770cb0dc34cfa02c84310c3";
//created the latitude and longitude variables that are going to take an give us the city.
let lat;
let lon;
// creating the query url
queryURL = "https://openweathermap.org/forecast5" + userCity + apiKey;

//getting just one city result
let limit = 1;

/* Direct geocoding allows to get geographical coordinates (lat, lon) by using name of the location (city name or area name).
// We need to make an api request in order to get the lat and long that we can then use in our weather forecast call.*/
let cityData;
/*fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ userCity +'&limit=1&appid=228a49a68770cb0dc34cfa02c84310c3')
    .then (response => response.json())
    .then (cityData => console.log(cityData))*/
// Used the ajax api method so that I can return the data.
$.ajax({
  url:
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    userCity +
    "&limit=1&appid=228a49a68770cb0dc34cfa02c84310c3",
  method: "GET",
})
  .then(function (response) {
    return response
  })
  .then(response => {
    cityData = response
    console.log(cityData)
    userCity = cityData[0].name
    console.log(userCity)
    lat = cityData[0].lat
    console.log(lat)
    lon = cityData[0].lon
    console.log(lon)
});
 
    