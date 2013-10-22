var app = angular.module("myApp", []);

app.controller("AppCtrl", ['$scope', '$http', function(a, b) {
	console.log(b);
}]);

app.directive("myDirective", function() {
	return {
		scope:{},
		link: function(scope, elements, attrs) {
			console.log(scope);
			console.log(attrs);
		}	
	};
});
