var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', '$interval', function($scope, $interval) {

	$scope.screenId = "main";
	
	$scope.screens = {
		"main" :      {name: "Main", url : "includes/main.htm" },
		"employees" : {name: "Employees", url : "includes/employees.htm" },
		"tasks" :     {name: "Tasks", url : "includes/tasks.htm" }
	};
	
	$scope.loadScreen = function(screenId)
	{
		$scope.screenId = screenId;
	}
	
	$scope.employees = [
		{"name":"Steve", "dept":"Marketing"},
		{"name":"Barbara", "dept":"Accounts"},
		{"name":"Jim", "dept":"HR"}
	];
	
	$scope.tasks = [
		{"name":"Write guide", "done":true},
		{"name":"Make app", "done":false}
	];
	
	$scope.toggleTask = function(task)
	{
		task.done = !task.done;
	}
	
	$scope.addTask = function(name)
	{
		if (name)
		{
			$scope.tasks.push({"name":name, "done":false});
		}
	}

}]);