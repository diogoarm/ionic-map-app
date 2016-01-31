'use strict';

function CardService($q, $http, API_HOST) {

  var service = {};

  service.add = function(card) {
    var deferred = $q.defer();

    $http.post(API_HOST + '/payments/card/add', card)
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err, status) {
        deferred.reject(err, status);
      });

    return deferred.promise;
  };

  service.list = function() {
    var deferred = $q.defer();

    $http.get(API_HOST + '/payments/card/list')
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err, status) {
        deferred.reject(err, status);
      });

    return deferred.promise;
  };

  return service;

}

angular.module('starter.services')
  .service('CardService', ['$q', '$http', 'API_HOST', CardService]);
