export const add = () => {
    return {
        type: "INCREMENT"
    }
}

export const remove = () => {
    return {
        type: "DECREMENT"
    }
}

export const setStocksAmount = (data) => {
    return {
        type: "SET_STOCKS",
        payload: data
    }
}