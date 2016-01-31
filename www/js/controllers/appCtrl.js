'use strict';

function AppCtrl($scope, $ionicModal, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  /*
   var deviceInformation = ionic.Platform.device();

   var isWebView = ionic.Platform.isWebView();
   var isIPad = ionic.Platform.isIPad();
   var isIOS = ionic.Platform.isIOS();
   var isAndroid = ionic.Platform.isAndroid();
   var isWindowsPhone = ionic.Platform.isWindowsPhone();

   var currentPlatform = ionic.Platform.platform();
   var currentPlatformVersion = ionic.Platform.version();
   */

}

angular.module('starter.controllers').controller('AppCtrl', ['$scope', '$ionicModal', '$state',  AppCtrl]);
