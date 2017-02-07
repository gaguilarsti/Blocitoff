(function () {
    function Tasks($firebaseArray) {
        var ref = firebase.database().ref().child("Tasks");
        var tasks = $firebaseArray(ref);


        
        var addTask = function(newTaskText) {
            var newTask = {
                title: newTaskText,
                favorite: false,
                status: 'active',
                created: firebase.database.ServerValue.TIMESTAMP,
                isExpired: false
            };
            
            tasks.$add(newTask);
            console.log("New task added" + newTask);
            
        };
        
        return {
          all: tasks,
          addTask: addTask
        };
    }

    angular
        .module('Blocitoff')
        .factory('Tasks', ['$firebaseArray', '$firebaseObject', Tasks]);
})();