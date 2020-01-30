import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import rootReducer from "./reducers/index"
import {Provider} from 'react-redux'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// //action
// const increment = () => {
//     return {
//         type:"INCREMENT"
//     }
// }
// const decrement = () => {
//     return {
//         type:"DECREMENT"
//     }
// }
// const Counter = (state=0,action) => {
//         switch(action.type){
//             case "INCREMENT":
//                 return state + 1
//             case "DECREMENT":
//                 return state - 1
//         }
// }
// let store = createStore(Counter)
// store.subscribe(() => console.log(store.getState()))


// store.dispatch(increment())
// store.dispatch(decrement())
ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>


, document.getElementById('root'));

