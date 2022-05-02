import { combineReducers, createStore } from "redux";
import { authReducer } from "./authState/reducer";


const rootReducer = combineReducers({
    auth:authReducer,
    
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())