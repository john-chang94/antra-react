const initState = {};

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                stocksAmount: state.stocksAmount + 1
            }
        case "DECREMENT":
            return {
                ...state,
                stocksAmount: state.stocksAmount - 1
            }
        case "SET_STOCKS":
            return {
                ...state,
                stocksAmount: action.payload
            }
        default:
            return state;
    }
}
