class AppController {

  constructor($ngRedux) {
    this.unsubscribe =
      $ngRedux.connect(
        this.mapStateToThis,
        null,
      )(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      selectedPost: state.app.selectedPost,
    };
  }
}

AppController.$inject = ['$ngRedux'];

export default AppController;
