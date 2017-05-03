const initialState = { 
	selectedPost: null,
	newName: ""
};

export default function AppReducer(state = initialState, action) {  
	switch (action.type) {

		case 'SELECT_POST':
			return Object.assign({}, state, {selectedPost: action.payload});

		case 'NEW_NAME_CHANGED':
			return Object.assign({}, state, {newName: action.payload});

		default:
			return state;
	}
}