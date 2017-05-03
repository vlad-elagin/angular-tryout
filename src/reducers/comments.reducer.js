const initialState = [];

export default function CommentsReducer(state = initialState, action) {  
    switch(action.type) {
        case 'GET_COMMENTS':
            return [...state, action.payload];

        default:
            return state;
    }
}