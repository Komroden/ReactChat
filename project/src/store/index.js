import { createStore, combineReducers,compose, applyMiddleware } from 'redux';
import { profileReducer } from "./profile/reducer"
import {messageReducer} from "./messages";
import {chatsReducer} from './chats';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
}



const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
    profile:profileReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(persistReducer(persistConfig,rootReducer), composeEnhancers(
    applyMiddleware(thunk)
))

export const persistor = persistStore(store)

