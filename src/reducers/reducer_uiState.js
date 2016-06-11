import {SPINNER_SHOW, SPINNER_HIDE} from '../actions/index';

const INITIAL_STATE = { showSpinner: false };

export default function(state = INITIAL_STATE, action){

  switch(action.type){

    case SPINNER_SHOW:
    return { showSpinner : true}

    case SPINNER_HIDE:
    return { showSpinner : false}

    default:
    return state;

  }
}
