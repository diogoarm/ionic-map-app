'use strict';

function GeoCtrl($scope, $ionicModal, uiGmapGoogleMapApi, $cordovaGeolocation, $ionicPopup) {

  var vm = this;
  var posOptions = {timeout: 10000, enableHighAccuracy: true};

  // An alert dialog
  vm.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Localização',
      template: 'Não foi possível recuperar sua posição atual'
    });
    alertPopup.then(function(res) {
      //TODO: chamar um intent para ligar o GPS
    });
  };

  vm.getCurrentPosition = function() {
    uiGmapGoogleMapApi.then(function(map){
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
          var lat  = position.coords.latitude
          var lng = position.coords.longitude

          vm.map = { center: {
            latitude: lat,
            longitude: lng
          },
            zoom: 16
          };
        }, function(err) {
          $cordovaDialogs.alert("Não foi possível recuperar sua posição", "Localização", "Ok");
        });
    });
  };

  uiGmapGoogleMapApi.then(function(maps) {
    vm.map = {
      center: { latitude: 0, longitude: 0 },
      options: {
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false
      },
      zoom: 8
    };

    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude
        var lng = position.coords.longitude

        vm.map = { center: {
          latitude: lat,
          longitude: lng
        },
          zoom: 16
        };
      }, function(err) {
        $cordovaDialogs.alert("Não foi possível recuperar sua posição", "Localização", "Ok");
      });
  });

  $ionicModal.fromTemplateUrl('templates/confirmacao.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };


}

angular.module('starter.controllers').controller('GeoCtrl',
  ['$scope', '$ionicModal', 'uiGmapGoogleMapApi', '$cordovaGeolocation', '$ionicPopup', GeoCtrl]);
