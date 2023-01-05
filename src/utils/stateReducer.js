function reducer(state, action) {
    switch (action.type) {
        case 'setMessage': {
            return {
                ...state, 
                message: action.data
            }
        }
        case 'setTextColour': {
            return {
                ...state, 
                textColour: action.data
            }
        }
        case 'setCardColour': {
            return {
                ...state, 
                cardColour: action.data
            }
        }
        default: return state
    }
}

export default reducer

