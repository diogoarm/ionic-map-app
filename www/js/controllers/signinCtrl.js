'use strict';

function SigninCtrl($state, ionicMaterialInk, ionicMaterialMotion, SigninService, TokenStorage) {

  var vm = this;

  vm.login = function(user) {
    /*SigninService.post(user).then(
      function successCallback(response) {
        if(response.token) {
          TokenStorage.store(response.token);
          $state.go('app.home');
        }
      },
      function errorCallback(response) {
        console.log('erro ' + response.statusText);
      }
    );*/

    $state.go('app.home');
  }

}

angular.module('starter.controllers').controller('SigninCtrl', SigninCtrl);
