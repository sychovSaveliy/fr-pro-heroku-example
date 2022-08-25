export const agesReducer = (state = [25, 37, 42], action) => {
    switch(action.type) {
        case 'age/add':
            return [...state, action.payload]
            // return state.concat(action.payload)
        case 'age/remove-first':
            return state.slice(1)
            // return state.concat(action.payload)
        default:
            return state;
    }
}