// Controllers
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    $scope.submit = function() {
        $location.path("/forecast");
    };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
    $scope.city = cityService.city;
    $scope.forecasts = $routeParams.forecasts || '2';
    $scope.units = weatherService.units;
    $scope.selected = weatherService.unit;
    $scope.$watch('selected', function() {
        weatherService.unit = $scope.selected;
    });
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.forecasts);
    $scope.convertToStandard = function(deg, unit) {
        if (unit === 'C') {
            return Math.round(deg - 273.15) + " °C";
        }
        else if (unit === 'F') {
            return Math.round(deg * 9 / 5 - 459.67) + " °F";
        }
        else {
            return Math.round(deg) + " °K";
        }
    };
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    };
}]);