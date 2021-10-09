import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";//catches the action and console log for us
import rootReducer from "./root.reducer";
/*
middleware are pretty much a function that recieve action 
in and do something and pass them out into root reducer.

    middlewrae                react
        |                       |
        v                       v  
 action -> rootreducer -> store -> dom changes
*/
const middlewares = [logger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;