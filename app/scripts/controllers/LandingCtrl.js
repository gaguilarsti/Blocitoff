(function() {
    function LandingCtrl(Tasks) {
        this.tasks = Tasks.all;
        $scope = this;
        
        $scope.addTask = function() {
            if (!$scope.newTaskText) {
                return;
            }
            console.log("addTask function was called");
            $scope.tasks.$add({
                title: $scope.newTaskText,
                favorite: false,
                status: 'active',
                created: firebase.database.ServerValue.TIMESTAMP,
                isExpired: false 
            });
            
            $scope.newTaskText = '';
        };
        
        $scope.elapsedTime = function(task) {
          var daysLeft = (7 - (Date.now() - task.created)/86400000).toPrecision(2);
          if (daysLeft > 0) {
              return daysLeft;
          } else {
              taskRef.child(task.$id).update({isExpired: true});
              taskRef.child(task.$id).update({status: 'expired'});
              return 0;
          }
        };
        
        $scope.completeTask = function(task) {
          taskRef.child(task.$id).update({status: 'complete'});  
        };
    }
    
    angular
        .module('Blocitoff')
        .controller('LandingCtrl', ['Tasks', LandingCtrl]);
})();