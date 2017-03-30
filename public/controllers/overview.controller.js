function OverviewController(OverviewService) {
  const controller = this;

  function init() {
    console.log(controller);
    controller.data = [];
    OverviewService.get().then(
      (data) => {
        controller.data = data.data;
        console.log('data.data:', data.data);
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
