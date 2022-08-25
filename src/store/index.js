import { applyMiddleware, combineReducers, createStore } from "redux";
import { handler, reportMiddleware } from "./middlewares";
import combinedReducers from "./reducers";

const initialStore = { 
    counter: 0, 
    x: 20,
    guests: {
        list: [{ id: 'G1' }, { id: 'G2' }, { id: 'G3' }],
        list2: []
    },
    weather: {
        current: null
    }
};


// applyMiddleware
// combineReducers

// redux-devtools

// useSelector
// useDispatch
// useStore




// function configureStore() {
//     return createStore(reducers, initialStore, applyMiddleware(handler, reportMiddleware));
// }

// ----------------------------------------
// combineReducers

function configureStore() {
    return createStore(
        combinedReducers, 
        {
            // ages: [],
            counter: -10,
            x: 20
        },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
}

export default configureStore;
