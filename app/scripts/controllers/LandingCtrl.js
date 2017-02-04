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
                completed: false,
                created: new Date()
            });
            
            $scope.newTaskText = '';
        };
    }
    
    angular
        .module('Blocitoff')
        .controller('LandingCtrl', ['Tasks', LandingCtrl]);
})();