var myapp = angular.module("myApp", []);

myapp.factory('Data', function() {
    return {
        message: "I'm data from service"
    };
});

myapp.filter('reverse', function(Data) {
    return function(text) {
        return text.split("").reverse().join("") + " - " + Data.message;
    };
});

myapp.factory('Avengers', function() {
    var Avengers = [];
    Avengers.cast = [{
        name: "Robert Downey Jr.",
        character: "Tony Stark / Iron Man"
    }, {
        name: "Chris Evans",
        character: "Steve Rogers / Captain America}"
    }, {
        name: "Mark Ruffalo",
        character: "Bruce Banner / The Hulk}"
    }, {
        name: "Chris Hemsworth",
        character: "Thor"
    }, {
        name: "Scarlett Johansson",
        character: "Natasha Romanoff / Black Widow"
    }, {
        name: "Jeremy Renner",
        character: "Clint Barton / Hawkeye"
    }, {
        name: "Tom Hiddleston",
        character: "Loki"
    }, {
        name: "Clark Gregg",
        character: "Agent Phil Coulson"
    }, {
        name: "Cobie Smulders",
        character: "Agent Maria Hill"
    }, {
        name: "Stellan Skarsgard",
        character: "Selvig"
    }, {
        name: "Samuel L. Jackson",
        character: "Nick Fury"
    }, {
        name: "Gwyneth Paltrow",
        character: "Pepper Potts"
    }, {
        name: "Paul Bettany",
        character: "Jarvis (voice)"
    }, {
        name: "Alexis Denisof",
        character: "The Other"
    }, {
        name: "Tina Benko",
        character: "NASA Scientist"
    }];
    return Avengers;
});

myapp.directive('superman', function() {
	return {
		restrict : "E",
		template : "<div>im here to protect you</div>"
	};
});

myapp.directive("myalert", function(){
	return {
		restrict : "C",
		link : function() {
			alert("Superman is comming....");	
		}
	};	
});

myapp.directive("mycomment", function(){
	return {
		restrict : "M",
		link : function() {
			alert("and also Batman....");	
		}
	};	
});
function FirstCtrl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl($scope, Data) {

    $scope.data = Data;

    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    };
}

function AvengersCtrl($scope, Avengers){
  $scope.avengers = Avengers;
}
