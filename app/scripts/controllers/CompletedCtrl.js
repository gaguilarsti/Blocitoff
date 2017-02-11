(function () {
    function CompletedCtrl(Tasks) {
        this.tasks = Tasks.all;
        $scope = this;
        
        this.sendTask = function () {
            Tasks.addTask(this.newTaskText);
            this.newTaskText = '';
            this.newTaskPriority = '';
        };
        
        this.elapsedTime = function (task) {
            //console.log("the elapsedTime function was called " + task);
            return Tasks.elapsedTime(task);
        };
        
        this.unCompleteTask = function (task) {
            console.log('unComplete function is being called!');
            Tasks.unCompleteTask(task);
        };
        
    }
    
    angular
        .module('Blocitoff')
        .controller('CompletedCtrl', ['Tasks', CompletedCtrl]);
})();