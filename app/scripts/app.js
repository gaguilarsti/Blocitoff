(function () {
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
            })
            .state('expired', {
                url: '/expired',
                controller: 'ExpiredCtrl as expired',
                templateUrl: '/templates/expired.html'
            })
            .state('completed', {
                url: '/completed',
                controller: 'CompletedCtrl as completed',
                templateUrl: '/templates/completed.html'
            });
    }
    
    /* function BlocitoffCoookies ($cookies) {
        var currentUser = $cookies.get('blocitoffCurrentUser');
        while (!currentUser || currentUser === '') {
            currentUser = prompt("Set a username!  This name will appear for your list!");
            $cookies.put('blocitoffCurrentUser', currentUser);
        }
        console.log($cookies.get('blocitoffCurrentUser'));
        return currentUser;
        
        NOTE: REMEMBER TO ADD THIS BACK IN TO DEPENDENCIES WHEN UNCOMMENTED!!!!
    } */
        
    angular
        .module('Blocitoff', ['ui.router', 'firebase'])
        .config(config);
    
})();
