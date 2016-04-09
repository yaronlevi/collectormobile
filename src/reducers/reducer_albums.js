import {FETCH_ALBUMS} from '../actions/index';

const INITIAL_STATE = { albums:[] };

export default function(state = INITIAL_STATE, action){

  console.log(`in reduce albums. action.type is:${action.type}`)

  switch(action.type){

    case FETCH_ALBUMS:
    var newArr = state.albums.concat(action.payload.data);
    var newState = {albums:newArr};
    return newState;

    default:
    return state;

  }
}
