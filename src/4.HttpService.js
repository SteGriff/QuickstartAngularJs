var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.rootUrl = "https://jsonplaceholder.typicode.com/";
	
	$scope.postId = 1;
	$scope.postTitle = "Hello world";
	$scope.postBody = "Nice post";
	$scope.postUserId = 1;
	
	$scope.response = {};
	
	$scope.getPost = function(postId){
		$http({
			method: 'GET',
			url: $scope.rootUrl + 'posts/' + postId
		}).then($scope.showResponse);
	}
		
	$scope.addPost = function(postTitle, postBody, postUserId){
		$http({
			method: 'POST',
			url: $scope.rootUrl + 'posts/',
			data: {
			  title: postTitle,
			  body: postBody,
			  userId: postUserId
			}
		}).then($scope.showResponse);
	}
	
	$scope.showResponse = function(response)
	{
		$scope.response = response;
	}
	
}]);