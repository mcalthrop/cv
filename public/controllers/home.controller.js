function HomeController(ContentfulModel) {
  const controller = this;

  function init() {
    controller.overview = ContentfulModel.getOverview();
    controller.workHistory = ContentfulModel.getWorkHistory();
  }

  init();
}
HomeController.$inject = ['ContentfulModel'];

angular
  .module('matt-calthrop-cv')
  .controller('HomeController', HomeController);
