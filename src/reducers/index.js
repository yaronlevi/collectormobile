import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums.js';
import AlbumsListParamsReducer from './reducer_albumsListParamsReducer.js';


const rootReducer = combineReducers({
  albums: AlbumsReducer,
  albumsListParams: AlbumsListParamsReducer
});

export default rootReducer;
