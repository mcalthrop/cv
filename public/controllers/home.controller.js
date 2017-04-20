function HomeController(ContentfulModel) {
  const controller = this;

  controller.canDisplayOnTheWebItem = (item) => {
    return item.fields.description &&
      item.fields.linkText &&
      item.fields.url;
  };

  function init() {
    controller.cv = ContentfulModel.entries[0].fields;
  }

  init();
}
HomeController.$inject = ['ContentfulModel'];

angular
  .module('matt-calthrop-cv')
  .controller('HomeController', HomeController);
