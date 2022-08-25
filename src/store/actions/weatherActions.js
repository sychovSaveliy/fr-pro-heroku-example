import { WEATHER_CURRENT_UPDATE, WEATHER_FORECAST_ADD, WEATHER_FORECAST_CREATE, WEATHER_PAST_REMOVE_FIRST, WEATHER_PAST_REMOVE_LAST } from ".";

export const weatherUpdateAction = (payload) =>  ({
    type: 'weather/update',
    payload
});


export const weatherCurrentUpdateAction = (payload) =>  ({
    type: WEATHER_CURRENT_UPDATE,
    payload
});


export const weatherForecastCreateAction = (payload) =>  ({
    type: WEATHER_FORECAST_CREATE,
    payload
});


export const weatherForecastAddAction = (payload) =>  ({
    type: WEATHER_FORECAST_ADD,
    payload
});


export const weatherPastRemoveLastAction = (payload) =>  ({
    type: WEATHER_PAST_REMOVE_LAST,
    payload
});


export const weatherPastRemoveFirstAction = (payload) =>  ({
    type: WEATHER_PAST_REMOVE_FIRST,
    payload
});
