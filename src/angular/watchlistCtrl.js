'use strict';

var app = angular.module('watchlist', ['ui.multiselect']);

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */
// app.filter('propsFilter', function() {
  // return function(items, props) {
    // var out = [];

    // if (angular.isArray(items)) {
      // items.forEach(function(item) {
        // var itemMatches = false;

        // var keys = Object.keys(props);
        // for (var i = 0; i < keys.length; i++) {
          // var prop = keys[i];
          // var text = props[prop].toLowerCase();
          // if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            // itemMatches = true;
            // break;
          // }
        // }

        // if (itemMatches) {
          // out.push(item);
        // }
      // });
    // } else {
      // // Let the output be the input untouched
      // out = items;
    // }

    // return out;
  // };
// });

app.controller('WatchlistCtrl', function($scope, $http, $timeout) {
	$http.get('/src/data/watchlistMockData.json').
	  success(function(data, status, headers, config) {
		console.log("success, returned data.");
		$scope.watchlistData = data;
		console.log(status);
		console.log(data);
	  }).
	  error(function(data, status, headers, config) {
		console.log("error returned");
		console.log(status);
		console.log(data);
	  });

	$scope.watchlistSelected = {};
	// $scope.watchlistData = [
		// {name: 'My Default watchlist 1', extra: 'foo'},
		// {name: 'Property Watchlist', extra: 'foo'},
		// {name: 'Insurance Watchlist', extra: 'bar'},
		// {name: 'Fixed Interest Watchlist', extra: 'foo'},
		// {name: 'Other insurance Watchlist', extra: '1234'},
		// {name: 'Curabitur tempus sollicitudin', extra: 'foo'},
		// {name: 'velit nec quam', extra: 'foo'},
		// {name: 'commodo dictum', extra: 'foo abc'},
		// {name: 'Financial list 2', extra: 'foo'},
		// {name: 'Curabitur tempus', extra: 'foo 123'},
		// {name: 'Vestibulum et orci', extra: 'foo'},
		// {name: 'porta sit amet felis', extra: 'foo'},
		// {name: 'Praesent tincidunt', extra: 'abc'},
		// {name: 'Suspendisse purus eros', extra: 'foo'},
		// {name: 'Sed maximus dignissi', extra: 'foo'},
		// {name: 'Nullam nisi massa', extra: 'foo'},
		// {name: 'Tincidunt euismod nisi', extra: 'foo'},
		// {name: 'In consectetur pretium', extra: 'foo'},
		// {name: 'Financial', extra: 'foo'},
		// {name: 'Miscellaneous list 123', extra: 'foo'}
	// ];
});
