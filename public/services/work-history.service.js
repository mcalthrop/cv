function WorkHistoryService($http) {
  console.log('WorkHistoryService');

  return {
    get: function () {
      return $http({
        method: 'GET',
        url: '/data/work-history.json'
      });
    }
  };
}

angular
  .module('matt-calthrop-cv')
  .factory('WorkHistoryService', ['$http', WorkHistoryService]);
