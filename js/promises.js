var app = angular.module("myApp", []);

app.config(function($routeProvider) {
	$routeProvider.
		when("/", 
			{
				templateUrl: "app.html",
				controller: "AppCtrl"
			}
		);
});

app.controller("AppCtrl", function($scope, $q) {
	var defer = $q.defer();
	defer.promise.then(function(weapon) {
		alert("I have a "+ weapon);
		return "axe";
	}).then(function(weapon) {
		alert("I have a "+ weapon);
		return "knife";
	}).then(function(weapon) {
		alert("I have a "+ weapon);
	});
	
	defer.resolve("sword");
	
	$scope.model = {
		message : "This is my app"	
	};
	
})

