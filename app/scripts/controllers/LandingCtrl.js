(function () {
    function LandingCtrl(Tasks) {
        this.tasks = Tasks.all;
        $scope = this;
        
        this.sendTask = function () {
            Tasks.addTask(this.newTaskText, this.newTaskPriority);
            this.newTaskText = '';
            this.newTaskPriority = '';
        };
        
        this.elapsedTime = function (task) {
            //console.log("the elapsedTime function was called " + task);
            return Tasks.elapsedTime(task);
        };
        
        this.completeTask = function (task) {
            Tasks.completeTask(task);
        };
        
    }
    
    angular
        .module('Blocitoff')
        .controller('LandingCtrl', ['Tasks', LandingCtrl]);
})();