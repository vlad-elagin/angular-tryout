import PostsActions from '../../actions/posts.actions';
import AppActions from '../../actions/app.actions';


export default class PostsController {

	constructor($ngRedux) {

		this.unsubscribe = 
			$ngRedux.connect(
				this.mapStateToThis, 
				Object.assign({}, PostsActions, AppActions)
			)(this);
	}

	$onDestroy() {
		this.unsubscribe();
	}

	mapStateToThis(state) {
		return {
			posts: state.posts,
			newName: state.app.newName,
			selectedPost: state.app.selectedPost
		}
	}

	submitPost() {
		if (!this.newName) return;
		this.createPost(this.newName);
		this.newNameChanged('');
	}





	
}