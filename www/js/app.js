'use strict';

var requires = [
  'ionic',
  'ionic-material',
  'uiGmapgoogle-maps',
  'ngCordova',
  'ngMessages',
  'ui.bootstrap',
  'starter.controllers',
  'starter.services',
  'starter.constants'
];

angular.module('starter', requires)
.run(['$ionicPlatform', 'TokenStorage', function($ionicPlatform, TokenStorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.backgroundColorByHexString('#3086D1');
    }

    //navigator.splashscreen.hide();

  });
}])

.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider',
  function($stateProvider, $httpProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAG6CCaqVrD4GaVHXjDk5635eYbdOl__5g',
      v: '3.x',
      libraries: 'weather,geometry,visualization'
    });

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/map.html',
            controller: 'GeoCtrl as geo'
          }
        }
      })

      .state('app.launch', {
        url: '/launch',
        views: {
          'menuContent': {
            templateUrl: 'templates/launch.html',
            controller: 'LaunchCtrl as launchCtrl'
          }
        }
      })

      .state('app.signin', {
        url: '/signin',
        views: {
          'menuContent': {
            templateUrl: 'templates/signin.html',
            controller: 'SigninCtrl as signinCtrl'
          }
        }
      })

      .state('app.signup', {
        url: '/signup',
        views: {
          'menuContent': {
            templateUrl: 'templates/signup.html',
            controller: 'SignupCtrl as signupCtrl'
          }
        }
      })

      .state('app.card', {
        url: '/card/add',
        views: {
          'menuContent': {
            templateUrl: 'templates/cards/add_card.html',
            controller: 'CardCtrl as cardCtrl'
          }
        }
      })

      .state('app.history', {
        url: '/history',
        views: {
          'menuContent': {
            templateUrl: 'templates/history.html'
          }
        }
      })

      .state('app.payment', {
          url: '/payment',
          views: {
            'menuContent': {
              templateUrl: 'templates/payment.html',
              controller: 'CardCtrl as cardCtrl'
            }
          },
          resolve: {
            cards: function(CardService) {
              return CardService.list();
            }
          }
      })

      .state('app.invitation', {
        url: '/invitation',
        views: {
          'menuContent': {
            templateUrl: 'templates/invitation.html'
          }
        }
      })

      .state('app.promo', {
        url: '/promo',
        views: {
          'menuContent': {
            templateUrl: 'templates/promo.html'
          }
        }
      })

      .state('app.help', {
        url: '/help',
        views: {
          'menuContent': {
            templateUrl: 'templates/help.html'
          }
        }
      }

    );


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/signin');

}]);

angular.module('starter.controllers', ['ionic']);
angular.module('starter.services', []);
