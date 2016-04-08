import {FETCH_ALBUMS} from '../actions/index';

const INITIAL_STATE = { albums:[] };

export default function(state = INITIAL_STATE, action){
  switch(action.type){

    case FETCH_ALBUMS:
    return {...state, albums:action.payload.data};

    default:
    return state;
    
  }
}
