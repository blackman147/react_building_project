 import { combineReducers }  from "redux"
 import { pillarReducer} from "./pillars"


const reducers = combineReducers({pillarState: pillarReducer})

export default reducers

