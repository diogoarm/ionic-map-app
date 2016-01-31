'use strict';

function SigninService($q, $http, API_HOST) {

  var service = {};

  service.post = function(user) {
    var deferred = $q.defer();

    var req = {
      method: 'POST',
      url: API_HOST + '/users/authenticate',
      headers: {
        'X-Auth-Username': user.username,
        'X-Auth-Password': user.password
      }
    }

    $http(req)
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
  .service('SigninService', ['$q', '$http', 'API_HOST', SigninService]);
