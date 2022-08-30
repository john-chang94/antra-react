const MyRootReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1};
        case "DECREMENT":
            return { count: state.count - 1};
        default:
            return state;
    }
}

export const myCreateStore = (reducer) => {
    let state = reducer(undefined, {
        type: "INIT"
    });
    const getState = () => {
        return state;
    }

    const dispatch = (action) => {
        state = reducer(state, action);
    }

    return {
        getState,
        dispatch
    }
}