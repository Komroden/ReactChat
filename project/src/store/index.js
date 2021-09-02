import { createStore, combineReducers } from 'redux';
import { profileReducer } from "./profile/reducer"
import {cardReducer} from "./messages";
import {collectionsReducer} from './chats';



const rootReducer = combineReducers({
    collections: collectionsReducer,
    cards: cardReducer,
    profile:profileReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());