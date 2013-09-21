var app = angular.module("behaviorApp",[]);

app.directive("enter", function() {
	return function(scope, element, attrs){
		element.bind("mouseenter", function(){
			element.addClass(attrs.enter);	
		});
	};	
});


app.directive("leave", function() {
	return function(scope, element, attrs){
		element.bind("mouseleave", function(){
			console.log("I'm leaving of you");
			element.removeClass(attrs.enter);
		});
	};	
});