import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums.js';

const rootReducer = combineReducers({
  albums: AlbumsReducer
});

export default rootReducer;
