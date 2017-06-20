// angular.module('todoService', [])

// 	// super simple service
// 	// each function returns a promise object
// 	.factory('Tods', ['$http',function($http) {
// 		return {
// 			get : function() {
// 				return $http.get('/api/todo');
// 			},
// 			create : function(todoData) {
// 				return $http.post('/api/todo', todoData);
// 			},
// 			delete : function(id) {
// 				return $http.delete('/api/todo/' + id);
// 			}
// 		}
// 	}]);