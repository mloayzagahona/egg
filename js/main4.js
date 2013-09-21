var app = angular.module("choreApp", []);

app.controller("ChoreCtrl", function($scope ){
	$scope.logChore = function(chore) {
		alert(chore + ' is done!');
	};	
});

app.directive("kid", function() {
	return {
		restrict: "E",
		scope: {
			donef: "&"	
		},
		template: '<input type="text" ng-model="chore"> {{chore}}'+
		'<br/><div class="button" ng-click="donef({chorec:chore})">I\'m done!</div>'
	};
});