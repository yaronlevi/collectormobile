import {FETCH_ALBUMS} from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action){

  switch(action.type){

    case FETCH_ALBUMS:
    var newArr = state.concat(action.payload.data);
    return newArr;

    default:
    return state;

  }
}
