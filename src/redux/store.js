import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {episodeReduser} from "./slices";

const rootReducer = combineReducers({
    episodes: episodeReduser
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}