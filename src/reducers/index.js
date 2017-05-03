import { combineReducers } from 'redux';
import PostsReducer from './posts.reducer';
import CommentsReducer from './comments.reducer';
import AppReducer from './app.reducer';

export const RootReducer = combineReducers({
	posts: PostsReducer,
	comments: CommentsReducer,
	app: AppReducer
});