const initialState = {
    data: {
        name: 'test'
    }
}
const test = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEST':
            return {
                ...state,
                data: action.data
            }

        default:
            return state;
    }
}


export default test;