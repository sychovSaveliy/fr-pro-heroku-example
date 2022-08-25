import { combineReducers } from "redux";
import { WEATHER_CURRENT_UPDATE, WEATHER_FORECAST_ADD, WEATHER_FORECAST_CREATE, WEATHER_PAST_REMOVE_FIRST, WEATHER_PAST_REMOVE_LAST } from "../actions";
import { agesReducer } from "./agesReducer";
import { counterReducer } from "./counterReducer";


function xReducer(state = 250, action) {
    switch(action.type) {
        case 'x/pow2':
            return state*state;
        default:
            return state;
    }
}

const initialWeatherState = {
    current: null,
    forecast: [],
    past: []
}

function weatherReducer(state = initialWeatherState, action) {
    switch(action.type) {
        case WEATHER_CURRENT_UPDATE:
            return {...state, current: action.payload};
        case WEATHER_FORECAST_CREATE:
            return {...state, forecast: action.payload};
        case WEATHER_FORECAST_ADD:
            return {...state, forecast: state.forecast.concat(action.payload)};
        case WEATHER_PAST_REMOVE_LAST:
            return {...state, past: state.past.slice(0, -1)};
        case WEATHER_PAST_REMOVE_FIRST:
            return {...state, past: state.past.slice(1)};
        default:
            return state;
    }
}

export default combineReducers({
    ages: agesReducer,
    counter: counterReducer,
    x: xReducer,
    weather: weatherReducer
});

// export default (state, action) => {
//     switch(action.type) {
//         // Counter field
//         case 'counter/decrement-counter':
//         case 'counter/increment-counter':
//             return {
//                 ...state,
//                 counter: state.counter + action.update
//             };

//         // Guests field
//         case 'guests/add-guest':
//             // state.guests.list.push(); // ERROR
//             return {
//                 ...state,
//                 guests: {
//                     ...state.guests,
//                     list: [...state.guests.list, action.payload]
//                 }
//             };
//         // Weather field
//         case 'weather/update':
//             return {
//                 ...state,
//                 weather: {
//                     ...state.weather,
//                     current: action.payload
//                 }
//             }
//         default:
//             return state;
//     }
// }