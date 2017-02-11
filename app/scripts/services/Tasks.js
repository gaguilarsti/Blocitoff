(function () {
    function Tasks($firebaseArray) {
        var ref = firebase.database().ref().child("Tasks");
        var tasks = $firebaseArray(ref);

        var addTask = function (newTaskText, newTaskPriority) {
            var newTask = {
                title: newTaskText,
                priority: newTaskPriority,
                favorite: false,
                status: 'active',
                created: firebase.database.ServerValue.TIMESTAMP,
                isExpired: false
            };
            
            tasks.$add(newTask);
            //console.log("New task added" + newTask);
            
        };
        
        var elapsedTime = function (task) {
            //console.log("elapsed time is really being called!");
            //console.log(task)
            
            //daysLeft = # of milliseconds in seve days minus the difference in milliseconds from the date a task was created to now, rounded to two decimal points
            var daysLeft = ((604800000 - (Date.now() - task.created)) / 86400000).toPrecision(2);
            if (task.status === 'complete') {
                return "Completed";
            } else if (daysLeft > 0) {
                //console.log(daysLeft);
                return daysLeft;
            } else {
                ref.child(task.$id).update({isExpired: true});
                ref.child(task.$id).update({status: 'expired'});
                return "Expired";
            }
        };
        
        var completeTask = function (task) {
            if (task.status) {
                ref.child(task.$id).update({status: 'complete'});
            }
        };
        
        var unCompleteTask = function (task) {
            if (task.status) {
                ref.child(task.$id).update({status: 'active'});
            }
        };
        
        return {
            all: tasks,
            addTask: addTask,
            elapsedTime: elapsedTime,
            completeTask: completeTask,
            unCompleteTask: unCompleteTask
        };
    }

    angular
        .module('Blocitoff')
        .factory('Tasks', ['$firebaseArray', '$firebaseObject', Tasks]);
})();