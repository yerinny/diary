import {GET_NOTES} from '../actionTypes';

export default function(state={}, action){
    switch(action.type){
        case GET_NOTES:
            return action.paylod; 
        default:
            return state;
    }
}