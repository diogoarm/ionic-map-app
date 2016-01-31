'use strict';

function SignupCtrl($state, ionicMaterialInk, ionicMaterialMotion, SignupService) {

  var vm = this;

  vm.register = function(user) {
    SignupService.post(user).then(
      function successCallback(response) {
        $state.go('app.card', { usuario:response });
      },
      function errorCallback(response) {
        alert('erro ao cadastrar o usuário'); //TODO: implementar tratamento do erro
      }
    );
  }

}

angular.module('starter.controllers').controller('SignupCtrl', SignupCtrl);
