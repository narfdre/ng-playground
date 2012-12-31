window.myApp.directive('progress', function() {

    return {
        templateUrl: 'tmplts/progress.html',
        scope: {
            steps: '='
        }
    };

});