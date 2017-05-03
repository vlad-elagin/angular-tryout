import PostsActions from '../../actions/posts.actions';
import AppActions from '../../actions/app.actions';

export default class CommentsController {

  constructor($ngRedux) {
    this.comment = '';
    this.focus = false;
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
      comment: state.app.newComment,
      comments: state.app.selectedPost ? state.posts[state.app.selectedPost].comments : {},
      selectedPost: state.app.selectedPost,
      author: state.app.author,
    };
  }

  onComment() {
    if (!this.comment || !this.focus) return;
    this.addComment(this.selectedPost, this.author, this.comment);
    this.newCommentChanged('');
  }

  submitComment($event) {
    if ($event.key === 'Enter') {
      $event.preventDefault();
      this.onComment();
    }
  }

  onChange() {
    this.newCommentChanged(this.comment);
  }
}
