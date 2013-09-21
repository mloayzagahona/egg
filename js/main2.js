var myapp = angular.module("twitterApp", []);

myapp.controller("AppCtrl", function($scope){
	$scope.loadMoreTweets = function () {
		alert("Loading more tweets!");	
	};
	
	$scope.deleteTweets = function () {
		alert("Deleting tweets!");	
	};
	
});

myapp.directive("enter", function(){
	return function (scope,element,attrs){
		element.bind("mouseenter", function(){
			console.log("entering...");
			scope.$apply(attrs.enter);
		});	
	}
});
