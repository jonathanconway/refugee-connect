angular.module('app', []).controller("AppController", function ($scope, $document) {
    $scope.currentDate = new Date();

    $scope.profile = {
        starRating: 0,
        showAddComment: false,
        commentAdded: false,
        comments: [{
            liked: false
        }, {
            liked: false
        }, {
            liked: false
        }]
    };

    $scope.profile.comments.forEach(function (c, i) {
        $scope.$watch('profile.comments[' + i + '].liked', function (liked) {
            if (liked) { toastr.success('Thanks for liking!'); }
        });
    });

    $scope.userProfile = {
        added: document.location.hash.indexOf('userProfileFriendAdded') > -1,
        sendRequest: userProfileSendRequest
    };

    $scope.nearme = {
        getLocation: nearmeGetLocation
    };

    function userProfileSendRequest() {
        toastr.success('Added Omar to your friends list.');
        setTimeout(function () {
            document.location = "userprofile_omar.html#userProfileFriendAdded";
        }, 2000);
    }

    function nearmeGetLocation() {
        toastr.success('Location updated');
    }

    $scope.$watch('profile.starRating', function (rating) {
        if (rating > 0) {
            toastr.success('Thanks for giving your rating!');
        }
    });

    $scope.$watch('profile.commentAdded', function (commentAdded) {
        if (commentAdded) {
            toastr.success('Thanks for commenting!');
        }
    });
});