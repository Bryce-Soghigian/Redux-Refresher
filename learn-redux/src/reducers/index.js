import loggedReducer from './auth';
import {combineReducers} from 'redux'
import counterReducer from './counter';


 const rootReducer = combineReducers({
    counter: counterReducer,
    loggedReducer:loggedReducer
})

export default rootReducer