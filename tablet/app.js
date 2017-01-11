angular.module('app', []).controller("AppController", function ($scope, $document, $location) {

    //
    // COMPANY
    //

    $scope.company = {
        comments: [{
            liked: false
        }, {
            liked: false
        }, {
            liked: false
        }]
    };

    $scope.company.comments.forEach(function (c, i) {
        $scope.$watch('company.comments[' + i + '].liked', function (liked) {
            if (liked) { toastr.success('Thanks for liking!'); }
        });
    });


    //
    // CREATE ACCOUNT
    //

    $scope.createAccount = {
        gender: ''
    };

});