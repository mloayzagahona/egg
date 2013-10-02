var app =  angular.module("reviewApp",[]);
app.controller("AppCtrl", function($scope) {
	$scope.leaveVoicemail = function(number, message) {
		if (typeof message === "undefined" || message == null || message.trim().length === 0) {
			message = "nothing"; 	
		}
		alert("Number:" + number + " said:" + message.trim());
	}
});
 
app.directive("phone", function() {
	return {
		restrict : 'E',
		scope:{
			number:"@",
			network:"=",
			makeCall:"&"
			},	
		template: '<div class="panel">Number: {{number}} Network: <select ng-model="network" ng-options="net for net in networks" ></select></div>' +
			'<input type="text" ng-model="value" />' +
			'<div class="button" ng-click="makeCall({number:number, message:value})">Call home!!</div>',
		link: function (scope){
			scope.networks = ["Verizon", "AT&T", "T-Mobile", "Sprint"];
			scope.network = scope.networks[2];
		}
	};	
})