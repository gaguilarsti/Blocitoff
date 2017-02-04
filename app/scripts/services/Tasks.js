(function () {
    function Tasks($firebaseArray) {
        var ref = firebase.database().ref().child("Tasks");
        var tasks = $firebaseArray(ref);

        return {
          all: tasks 
        };
    }

    angular
        .module('Blocitoff')
        .factory('Tasks', ['$firebaseArray', Tasks]);
})();