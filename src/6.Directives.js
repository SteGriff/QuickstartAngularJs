var myApp = angular.module('myApp',[]);

/*
	Two different controllers which we'll only use to set the text
	of the next-button directive
*/
myApp.controller('NormalStepController', ['$scope', function($scope) {
	
	$scope.nextButtonText = "Next";
	
}]);

myApp.controller('FinalStepController', ['$scope', function($scope) {

	$scope.nextButtonText = "Finish";
	
}]);

/*
	AngularJS Directives are translated between camelCase and kebab-dash-case automagically
	
*/
myApp.directive('nextButton', function(){
    return {
        restrict : 'E',
		// Setting a scope object is essential, to isolate
		// the scope of each instance of the directive
		scope : {}, 
        template : '<button>{{nextButtonText}}</button>',
		controller : '@',
		// The 'name' attribute here is a very special property
		// for naming the attribute you want to supply the controller name
        name : 'controllerName'
    }
});

/*
	An element directive with passed-in scope variable
	@ allows dynamic or static values to be passed in
	= is two way binding, always dynamic
	Left-hand side is name on scope object
	Right-hand side can include HTML attr name (if different)
*/
myApp.directive('formField', function(){
    return {
        restrict : 'E',
        scope : {
			'name' : '@',
			'type' : '@',
			'label' : '@'
		},
        templateUrl : 'includes/template.htm',
    }
});

/*
	An attribute directive
	We use the attribute itself to pass scope in by binding
	on @messagePopup (same as the directive name)
	Within the link() fn, we can modify element and stuff.
	Be sure to use scope (passed in to link), not $scope
*/
myApp.directive('messagePopup', function(){
    return {
        restrict : 'A',
		scope : {
			message : '@messagePopup'
		},
        link: function postLink(scope, element, attrs) {
			console.log(scope,element,attrs);
			element.css({
				cursor : 'pointer',
				border : '2px solid #F0F0F0'
			});
		
			element.bind('click', function (event) {
				alert(scope.message);
			});
		}
    }
});