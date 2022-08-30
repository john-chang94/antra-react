export const myCreateStore = (reducerFn) => {
    let state = reducerFn(undefined, {
        type: "INIT"
    });
    const getState = () => {
        return state;
    }

    const dispatch = () => {
        state = reducerFn(state, action);
    }

    return {
        getState,
        dispatch
    }
}