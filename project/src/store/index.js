import { createStore, combineReducers,compose, applyMiddleware } from 'redux';
import { profileReducer } from "./profile/reducer"
import {messageReducer} from "./messages";
import {chatsReducer} from './chats';
import thunk from 'redux-thunk';
import {commentsReducer} from './comments';
import {userReducer} from "./user";




const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
    profile:profileReducer,
    applications:commentsReducer,
    user:userReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))



