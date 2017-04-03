function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'states/home.html',
      resolve: ['ContentfulModel', ContentfulModel => ContentfulModel.getEntries()]
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('matt-calthrop-cv', ['ui.router'])
  .config(mainRouter);
