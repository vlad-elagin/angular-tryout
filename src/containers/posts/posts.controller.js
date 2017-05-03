import PostsActions from '../../actions/posts.actions';
import AppActions from '../../actions/app.actions';

export default class PostsController {

  constructor($ngRedux) {
    this.unsubscribe =
      $ngRedux.connect(
        this.mapStateToThis,
        Object.assign({}, PostsActions, AppActions),
      )(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  static mapStateToThis(state) {
    return {
      posts: state.posts,
      newName: state.app.newName,
      selectedPost: state.app.selectedPost,
    };
  }

  onSubmit() {
    if (!this.newName) return;
    this.createPost(this.newName);
    this.newNameChanged('');
  }

  submitName($event) {
    if ($event.key === 'Enter') {
      $event.preventDefault();
      this.onSubmit();
    }
  }

  onRemove(id) {
    if (id === this.selectedPost) this.selectPost(null);
    this.removePost(id);
  }

  onSelect(id) {
    if (id === this.selectedPost) return;
    this.selectPost(id);
  }

}
