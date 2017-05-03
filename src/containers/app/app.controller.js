export default class AppController {

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

  static mapStateToThis(state) {
    return {
      selectedPost: state.app.selectedPost,
    };
  }
}
