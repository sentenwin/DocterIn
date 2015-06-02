// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })


    

    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.facility', {
        url: '/facility',
        views: {
            'menuContent': {
                templateUrl: 'templates/facility.html',
                controller: 'FacilityCtrl'
            },
           
        }
    })

    .state('app.appoinment', {
        url: '/appoinment',
        views: {
            'menuContent': {
                templateUrl: 'templates/appoinment.html',
                controller: 'AppoinmentCtrl'
            },
            'fabContent': {
                template: '<button id="fab-appoinment" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-appoinment').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
    

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })


      .state('app.doc', {
        url: '/doc',
        views: {
            'menuContent': {
                templateUrl: 'templates/doc.html',
                
            },
            
        }
    })

        .state('app.doctr', {
        url: '/doctr',
        views: {
            'menuContent': {
                templateUrl: 'templates/doctr.html',
                
            },
            
        }
    })


    .state('app.pmc', {
        url: '/pmc',
        views: {
            'menuContent': {
                templateUrl: 'templates/pmc.html',
                controller: 'PmcCtrl'
            },
            'fabContent': {
                template: '<button id="fab-pmc" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-pmc').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
