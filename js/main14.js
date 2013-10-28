var app = angular.module("myApp", []);

app.run(function($templateCache) {
	$templateCache.put("zippy.html", "<div><h4 ng-click='toggleContent()'>{{title}}</h4><div ng-show='isContentVisible' ng-transclude></div></div>");
});

app.directive("zippy", function($templateCache) {
	console.log($templateCache.get("zippy.html"));
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',	
		},
		templateUrl: 'zippy.html',
		link: function(scope) {
			scope.isContentVisible = false;
			scope.toggleContent = function() {
				scope.isContentVisible = !scope.isContentVisible;
			}
		}
	};
});