'use strict';

function SignupService($q, $http, API_HOST) {

  var service = {};

  service.post = function(user) {
    var deferred = $q.defer();

    $http.post(API_HOST + '/users', user)
      .success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      });

    return deferred.promise;
  };

  return service;

}

angular.module('starter.services')
  .service('SignupService', ['$q', '$http', 'API_HOST', SignupService]);
