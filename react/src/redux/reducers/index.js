const reducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_LISTS':
            return { ...state, loading: true };
        case 'LISTS_RECEIVED':
            return { ...state, restaurants: action.json, loading: false }
        default:
            return state;
        }
    };
export default reducer;