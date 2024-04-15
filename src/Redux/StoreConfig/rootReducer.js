import { combineReducers } from "redux";
import ChatApiReducer from '../ChatApi/reducer'

import messageReducer from "../Chat/reducer";
const rootReducer = combineReducers({
    ChatApiReducer,
    messageReducer
    
})
export default rootReducer