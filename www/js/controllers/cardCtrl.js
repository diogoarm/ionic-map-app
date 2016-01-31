'use strict';

function CardCtrl($scope, $state, $ionicModal, CardService, cards) {

  var vm = this;
  vm.loginData = {};
  vm.data = cards ? cards : [];

  vm.add = function(card) {
    CardService.add(card).then(
      function(success) {
        vm.data.push(success);
        $scope.modal.hide();
      },
      function(err, status) {
        console.log(err);
      }
    );
  }

  $ionicModal.fromTemplateUrl('templates/cards/add_card.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  vm.closeModal = function() {
    $scope.modal.hide();
  };

  vm.showModal = function() {
    $scope.modal.show();
  };

}

angular.module('starter.controllers')
  .controller('CardCtrl', ['$scope', '$state', '$ionicModal', 'CardService', 'cards', CardCtrl]);
