import { createStore, combineReducers } from 'redux';
import { profileReducer } from "./profile/reducer"
import {messageReducer} from "./messages";
import {chatsReducer} from './chats';



const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
    profile:profileReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());