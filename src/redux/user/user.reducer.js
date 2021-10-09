/*
action object
{
    type:
    payload:
}
*/
import { userActionTypes } from "./user.action.types";

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer

/*
the reason we always return new object in reducer because we want our components to rerender.
const userReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {/////////
                ...state,
                currentUser: action.paylaod
            }////////
        default:
            return state;
            }
    }
as we remember if we pass in the same old object except the property is different our components might not rerender as we wanted to because of how the react component works. react componets only rerender if their props is different and the only way the props are different is the object it has is new. 
const userReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return state.currentUser = action.paylaod /////this might not rerender component because the object is same even if the property inside object is different
        default:
            return state;
        }
    }
*/