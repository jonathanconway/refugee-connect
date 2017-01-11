angular.module('app', []).controller("AppController", function ($scope, $document, $location) {

    //
    // HOME
    //

    var hash = (document.location.hash.replace('#', '').replace('/', ''));
    $scope.home = {
        addedCards: (hash && hash.split('addedCards=')[1].split(',')) || []
    };


    //
    // RESOURCE PROFILE
    //

    $scope.profile = {
        starRating: 0,
        showAddComment: false,
        commentAdded: false,
        comments: [{
            liked: false
        }, {
            liked: false
        }]
    };
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
    $scope.profile.comments.forEach(function (c, i) {
        $scope.$watch('profile.comments[' + i + '].liked', function (liked) {
            if (liked) { toastr.success('Thanks for liking!'); }
        });
    });


    //
    // USER PROFILE
    //

    function userProfileSendRequest() {
        toastr.success('Added Omar to your friends list.');
        document.location = "userprofile_omar.html#userProfileFriendAdded";
    }
    $scope.userProfile = {
        added: document.location.hash.indexOf('userProfileFriendAdded') > -1,
        sendRequest: userProfileSendRequest
    };


    //
    // CREATE ACCOUNT
    //
    function createAccountAddCard(card) {
        $scope.createAccount.addedCards.push(card);
        $scope.createAccount[card + 'Added'] = true;
    }
    $scope.createAccount = {
        searchTerm: '',
        addedCards: [],
        addCard: createAccountAddCard,
        legalAdded: false,
        healthAdded: false,
        religionAdded: false
    };
});