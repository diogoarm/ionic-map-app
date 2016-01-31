'use strict';

function LaunchCtrl($state) {

  var vm = this;

  vm.login = function() {
    $state.go('app.signin');
  }

  vm.signup = function() {
    $state.go('app.signup');
  }

}

angular.module('starter.controllers').controller('LaunchCtrl', LaunchCtrl);
