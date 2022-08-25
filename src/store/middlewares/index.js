export const handler = () => next => action => {
    console.log('Action:', action);
    if (true) {
        next(action);
    } else {
        window.location.href = '/'
    }
}

export const reportMiddleware = () => next => action => {
    console.log('Report smth');
    next(action);
}