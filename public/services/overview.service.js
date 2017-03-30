function OverviewService($http) {
  console.log('OverviewService');

  return {
    get: function () {
      return $http({
        method: 'GET',
        url: '/data/overview.json'
      });
    }
  };
}

angular
  .module('matt-calthrop-cv')
  .factory('OverviewService', ['$http', OverviewService]);
