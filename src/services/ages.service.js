export const listMutationCallback = (store) => () => {
    store.dispatch({ type: 'age/add', payload: 87 });
    store.dispatch({ type: 'age/remove-first' });
}