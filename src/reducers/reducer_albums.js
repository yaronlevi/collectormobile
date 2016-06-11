import {GET_SALES_FINISHED} from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action){

  switch(action.type){

    case GET_SALES_FINISHED:
    var newArr = state.concat(action.sales);
    return newArr;

    default:
    return state;

  }
}
