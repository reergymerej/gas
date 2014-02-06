'use strict';

angular.module('mean.system')

.controller('GasCtrl', ['$scope', function ($scope) {
    $scope.receipts = [
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 }
    ];
}]);