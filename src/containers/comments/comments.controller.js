import CommentsActions from '../../actions/comments.actions';

export default class CommentsController {

	constructor($ngRedux) {
		this.comments = [];
		this.unsubscribe = 
			$ngRedux.connect(this.mapStateToThis, CommentsActions)(this);
	}

	$onDestroy() {
		this.unsubscribe();
	}

	mapStateToThis(state) {
		return {
			//comments: state.posts[selectedPost].comments || []
			comments: []
		}
	}
	
}