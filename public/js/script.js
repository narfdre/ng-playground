var myApp = angular.module('myApp', ['ngResource']);
myApp.factory('Users', function($resource) {
	var Users = $resource('/User/stuff/goes/here');
	return Users;
});

function testCtrl($scope, Users){
	$scope.yo = function(stuff){
		console.log('Yo!');
		$scope.data.push({name: stuff});
	};

	$scope.data = [
		{name: 'dave'},
		{name: 'andre'}
	];

	$scope.addUser = function(){
		Users.save();
	};
}