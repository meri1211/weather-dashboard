// creating a city variable that would reflect the chosen city by the user
let userCity = "Cairo";
// the Api key from Open Weather
let apiKey = "228a49a68770cb0dc34cfa02c84310c3";
//created the latitude and longitude variables that are going to take an give us the city.
let lat;
let lon;
// creating the query url for the 5 day forecast
let queryURL =
  "https://openweathermap.org/forecast?" +
  "lat=" +
  lat +
  "&lon=" +
  lon +
  "&limit=1&appid=228a49a68770cb0dc34cfa02c84310c3";

//getting just one city result
let limit = 1;

/* Direct geocoding allows to get geographical coordinates (lat, lon) by using name of the location (city name or area name).
// We need to make an api request in order to get the lat and long that we can then use in our weather forecast call.*/
let cityData;
fetch(
  "http://api.openweathermap.org/geo/1.0/direct?q=" +
    userCity +
    "&limit=1&appid=228a49a68770cb0dc34cfa02c84310c3"
)
  .then((response) => response.json())
  .then((cityData) => {
    console.log(cityData);
    cityUser = cityData[0].name;
    console.log(cityUser);
    lat = cityData[0].lat;
    console.log(lat);
    lon = cityData[0].lon;
    console.log(lon);
    cityUser = cityData[0].name

  });



  fetch( "https://openweathermap.org/forecast?" +
  "lat=" +
  lat +
  "&lon=" +
  lon +
  "&limit=1&appid=228a49a68770cb0dc34cfa02c84310c3")
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
  });
