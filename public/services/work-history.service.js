function WorkHistoryService($http) {
  return {
    get: function () {
      return $http({
        method: 'GET',
        url: '/data/work-history.json'
      });
    }
  };
}

WorkHistoryService.$inject = ['$http'];

angular
  .module('matt-calthrop-cv')
  .factory('WorkHistoryService', WorkHistoryService);
