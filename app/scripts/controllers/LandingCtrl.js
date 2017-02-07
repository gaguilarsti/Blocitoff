(function() {
    function LandingCtrl(Tasks) {
        this.tasks = Tasks.all;
        $scope = this;
        
        this.sendTask = function() {
            Tasks.addTask(this.newTaskText);
            this.newTaskText = '';
        }
        
        $scope.elapsedTime = function(task) {
            //daysLeft = # of milliseconds in seve days minus the difference in milliseconds from the date a task was created to now, rounded to two decimal points
          var daysLeft = ((604800000 - (Date.now() - task.created))/86400000).toPrecision(2);
          if (daysLeft > 0) {
              return daysLeft;
          } else {
              Tasks.ref.child(task.$id).update({isExpired: true});
              Tasks.ref.child(task.$id).update({status: 'expired'});
              return 0;
          }
        };
        
        $scope.completeTask = function(task) {
            console.log('completeTask called!');
            console.log(task);
            if (task.status) {
                Tasks.ref.child(task.$id).update({status: 'complete'});
            }
        };
    }
    
    angular
        .module('Blocitoff')
        .controller('LandingCtrl', ['Tasks', LandingCtrl]);
})();