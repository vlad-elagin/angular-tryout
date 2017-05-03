import { combineReducers } from 'redux';
import PostsReducer from './posts.reducer';
import AppReducer from './app.reducer';

const RootReducer = combineReducers({
  posts: PostsReducer,
  app: AppReducer,
});

export default RootReducer;
