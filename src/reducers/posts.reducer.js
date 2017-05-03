/* =================================
    Model is
    {
        name: 'string',
        comments: [
            {
                author: 'name',
                text: 'string'
            },
            {
                author: 'name',
                text: 'string'
            }
        ]
    }
=================================*/

const initialState = {};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {

    case 'CREATE_POST': {
      const newItemId = Object.keys(state).length > 0 ?
        Math.max(...Object.keys(state)) + 1 :
        0;
      return Object.assign({}, state, {
        [newItemId]: {
          name: action.payload,
          comments: [],
        },
      });
    }

    case 'REMOVE_POST': {
      const newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    }

    case 'ADD_COMMENT': {
      const newCommentState = Object.assign({}, state);
      if (!newCommentState[action.payload.to]) return null;
      newCommentState[action.payload.to].comments.push({
        author: action.payload.by,
        text: action.payload.text,
      });
      return newCommentState;
    }

    default:
      return state;
  }
}
