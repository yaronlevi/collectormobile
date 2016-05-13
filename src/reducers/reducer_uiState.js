import {CHANGE_SWITCH} from '../actions/index';

const INITIAL_STATE = { switch: true };

export default function(state = INITIAL_STATE, action){

  switch(action.type){

    case CHANGE_SWITCH:
    return { switch : action.payload}

    default:
    return state;

  }
}
