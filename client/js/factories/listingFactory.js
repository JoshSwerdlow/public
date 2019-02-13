angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://https://git.heroku.com/joshswerdlow-bootcamp4/api/listings');
    },

	create: function(listing) {
	  return $http.post('http://https://git.heroku.com/joshswerdlow-bootcamp4/api/listings', listing);
    },

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
       return $http.delete('https://git.heroku.com/joshswerdlow-bootcamp4/api/listings', id);
    }
  };

  return methods;
});
