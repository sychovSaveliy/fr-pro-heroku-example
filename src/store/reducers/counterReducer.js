export const counterReducer = (state = -5, action) => {
    switch(action.type) {
        case 'counter/increment':
            return state + 1
        case 'counter/decrement':
            return state - 1
        default:
            return state;
    }
}