'use strict';

angular.module('starter')
  .factory('TokenStorage', function() {
  var storageKey = 'auth_token';
  return {
    store : function(token) {
      return localStorage.setItem(storageKey, token);
    },
    retrieve : function() {
      return localStorage.getItem(storageKey);
    },
    clear : function() {
      return localStorage.removeItem(storageKey);
    }
  };

})
  .factory('TokenAuthInterceptor', ['$q', 'TokenStorage', function($q, TokenStorage) {
  return {
    request: function(config) {
      var authToken = TokenStorage.retrieve();
      if (authToken) {
        config.headers['X-Auth-Token'] = authToken;
      }
      return config;
    },
    responseError: function(error) {
      if (error.status === 401 || error.status === 403) {
        TokenStorage.clear();
      }
      return $q.reject(error);
    }
  };
}]).config(function($httpProvider) {
  $httpProvider.interceptors.push('TokenAuthInterceptor');
});
