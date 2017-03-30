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

angular
  .module('matt-calthrop-cv')
  .controller('OverviewController', ['OverviewService', OverviewController]);
