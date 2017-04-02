function OverviewService($http) {
  return {
    get: function () {
      return $http({
        method: 'GET',
        url: '/data/overview.json'
      });
    }
  };
}

OverviewService.$inject = ['$http'];

angular
  .module('matt-calthrop-cv')
  .factory('OverviewService', OverviewService);
