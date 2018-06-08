var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', function($scope) {

	$scope.message = "";
	$scope.newButtonText = "";
	$scope.buttons = ["Thanks", "OK", "Bye", "😀"];
	
	$scope.addChat = function(segment){
		$scope.message += " " + segment;
	}
	
	$scope.addButton = function(){
		
		if ($scope.newButtonText)
		{
			$scope.buttons.push($scope.newButtonText);
		}
	}
	
	$scope.urlFunction = function()
	{
		return $scope.message.replace(" ", "");
	}
}]);