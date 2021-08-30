import { createStore, combineReducers } from 'redux';
import { profileReducer } from "./profile/reducer"
import { chatsReducer } from "./chats/reducer"
import { messageReducer } from "./messages/reducer"



const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
    profile:profileReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());