function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'states/home.html',
      resolve: ['ContentfulModel', ContentfulModel => ContentfulModel.getEntries()]
    });

  $urlRouterProvider.otherwise('/');
}
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('matt-calthrop-cv', ['ui.router'])
  .config(MainRouter);
