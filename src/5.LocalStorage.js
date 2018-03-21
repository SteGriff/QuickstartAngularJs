var myApp = angular
	.module('myApp',['LocalStorageModule'])
	.config(function(localStorageServiceProvider){
		//Customise this Prefix value
		localStorageServiceProvider.setPrefix('myLocalStoragePrefix');
	});

//Inject the localStorageService by name
myApp.controller('MainController', ['$scope', 'localStorageService', function($scope, localStorageService) {

	//Initialise your model value to that held in LocalStorage
	$scope.message = localStorageService.get('message');
	
	//Watch page changes to 'message' and save them into LocalStorage
	$scope.$watch('message', function(value){
		localStorageService.set('message', value);
	});
	
	//Watch changes to the value of 'message' in LocalStorage and save them to the model
    $scope.$watch(function(){
		return localStorageService.get('message');
    },
	function(value){
		$scope.message = value;
    });
	
}]);
