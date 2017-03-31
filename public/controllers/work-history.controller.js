function WorkHistoryController(WorkHistoryService) {
  const controller = this;

  function init() {
    controller.data = [];
    WorkHistoryService.get().then(
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

WorkHistoryController.$inject = ['WorkHistoryService'];

angular
  .module('matt-calthrop-cv')
  .controller('WorkHistoryController', WorkHistoryController);
