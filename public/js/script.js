var myApp = angular.module('myApp', ['ngResource']);

myApp.factory('Users', function($resource) {
	var Users = $resource('/User/stuff/goes/here');
	return Users;
});

function testCtrl($scope, Users, $filter){
    
	$scope.yo = function(stuff){
		console.log('Yo!',stuff);
		$scope.data.push({name: stuff, status: 'pending'});
	};
    
    $scope.addUser = function(){
		Users.save();
	};

	$scope.data = [
		{name: 'dwelch2344',    status: 'pending'},
		{name: 'narfdre',       status: 'pending'},
        {name: 'danlangford',   status: 'pending'}
	];
    
    $scope.$watch('data',function(newData, oldData){
        var currLen = $filter('filter')(newData, 'current').length;
        if(currLen===0){
            nextPendingToCurrent();
        }
    }, true);
    
    var currentToComplete = function(){
        $filter('filter')($scope.data, 'current').forEach(function(e, i, arr) {
            e.status = 'completed';
        });
    };
    
    var nextPendingToCurrent = function(){
        var next = $filter('filter')($scope.data, 'pending')[0];
        if (next) {
            next.status = 'current';
        }
    };
        
    $scope.nextQ = function() {
        currentToComplete();
        nextPendingToCurrent();
    };

}