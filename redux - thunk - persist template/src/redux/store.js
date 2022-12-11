import { createStore,applyMiddleware, compose } from "redux";
import reducers from './reducers'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
    key:"root",
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // devtools
 

const persistedReducer = persistReducer(persistConfig,reducers)
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store); 


export default store;
export {persistor}