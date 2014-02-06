'use strict';

// Gas service used for articles REST endpoint
angular.module('mean.gas')

.factory('Gas', ['$resource', function ($resource) {
    return $resource(
    	'gas/:gasId',
    	{ gasId: '@_id' },
	    { update: { method: 'PUT' } }
	);
}]);