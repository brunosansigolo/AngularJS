// Routes
weatherApp.config(function($routeProvider, $locationProvider, $sceDelegateProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:forecasts', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'https://api.openweathermap.org/data/2.5/forecast'
    ]);
});