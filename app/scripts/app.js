(function() {
    function config($stateProvider, $locationProvider) {
        
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            });
    }
        
    angular
        .module('Blocitoff', ['ui.router', 'firebase'])
        .config(config);
    
})();
