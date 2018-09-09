// Services
// Share some data between homepage and forecast page
weatherApp.service('cityService', function(){
    this.city = "";
    this.units = [
        {name: "Celsius",unit: "C"},
        {name: "Fahrenheit",unit: "F"},
        {name: "Kelvin",unit: "K"}
    ];
    this.unit = this.units[1];
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, forecasts) {
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast");
        return weatherAPI.get({q: city, cnt: forecasts, appid: "f1eda1928b1f7a2e9148867245bc3aa7" });
    };
}]);