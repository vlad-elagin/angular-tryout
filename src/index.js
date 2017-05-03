// libs
import angular from 'angular';
import ngRedux from 'ng-redux';

// posts
import PostsComponent from './containers/posts/posts.component';
import PostsController from './containers/posts/posts.controller';

// comments
import CommentsComponent from './containers/comments/comments.component';
import CommentsController from './containers/comments/comments.controller';

// misc
import {RootReducer} from './reducers';
import AppComponent from './components/app/app.component';

import './style/styles.styl';

const MODULE_NAME = 'test_app';

angular.module(MODULE_NAME, [ngRedux])
	.component('app', AppComponent)
	.component('posts', PostsComponent)
	.controller('PostsController', PostsController)
	.component('comments', CommentsComponent)
	.controller('CommentsController', CommentsController)
	.config(
		($ngReduxProvider) => {
			// read saved state and use as initial
			const initialState = JSON.parse(localStorage.getItem('testApp')) || {}
			$ngReduxProvider.createStoreWith(RootReducer, null, null, initialState);
		}
	)
	.run(($ngRedux) => {
		// write any state change into localStorage
		$ngRedux.subscribe(() => {
			localStorage.setItem('testApp', JSON.stringify($ngRedux.getState()));
		})
	})


export default MODULE_NAME;