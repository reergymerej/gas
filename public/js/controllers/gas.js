'use strict';

angular.module('mean.gas')

.controller('GasCtrl', ['$scope', 'Articles', 'Gas', function ($scope, Articles, Gas) {
    $scope.receipts = [
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 },
    	{ date: 1, mileage: 2, gallons: 3, cost: 4 }
    ];

    $scope.articles = 'no articles found yet';

    $scope.find = function () {
    	Articles.query(function (articles) {
    		$scope.articles = articles;
    	});

    	Gas.query(function (receipts) {
    		console.log(receipts);
    	});
    };
}]);