function OverviewController(OverviewService) {
  const controller = this;

  function init() {
    controller.data = [];
    OverviewService.get().then(
      (data) => {
        controller.data = data.data;
      },
      (error) => {
        console.warn('error:', error);
      }
    );
  }

  init();
}

OverviewController.$inject = ['OverviewService'];

angular
  .module('matt-calthrop-cv')
  .controller('OverviewController', OverviewController);
