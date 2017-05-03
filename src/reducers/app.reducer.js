const initialState = {
  selectedPost: null,
  newName: '',
  newComment: '',
  author: 'mr. red',
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_POST':
      return Object.assign({}, state, { selectedPost: action.payload });

    case 'NEW_NAME_CHANGED':
      return Object.assign({}, state, { newName: action.payload });

    case 'NEW_COMMENT_CHANGED':
      return Object.assign({}, state, { newComment: action.payload });

    case 'PICK_AUTHOR':
      return Object.assign({}, state, { author: action.payload });

    default:
      return state;
  }
}
