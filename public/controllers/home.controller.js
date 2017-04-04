function HomeController(ContentfulModel) {
  const controller = this;

  function init() {
    controller.cv = ContentfulModel.entries[0].fields;
  }

  init();
}
HomeController.$inject = ['ContentfulModel'];

angular
  .module('matt-calthrop-cv')
  .controller('HomeController', HomeController);
