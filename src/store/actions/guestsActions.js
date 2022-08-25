export const addGuestAction = (payload) => {
    return {
        type: 'guests/add-guest',
        payload
    }
}

export const removeGuestAction = {
    type: 'guests/remove-guest'
}