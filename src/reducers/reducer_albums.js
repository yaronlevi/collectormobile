import {FETCH_ALBUMS} from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action){

  console.log(`in albums reducer`);

  switch(action.type){

    case FETCH_ALBUMS:
    var newArr = state.concat(action.payload.data);
    return newArr;

    default:
    return state;

  }
}
