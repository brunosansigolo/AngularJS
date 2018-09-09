// Directives
weatherApp.directive('weatherReport', function() {
    return {
        restrict: 'E',
        templateUrl: 'directivesPages/weatherReport.html',
        replace: true,
        scope: {
            weatherByThreeHours: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});