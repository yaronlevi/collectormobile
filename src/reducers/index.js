import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums.js';
import AlbumsListParamsReducer from './reducer_albumsListParamsReducer.js';
import RoutesReducer from './reducer_routes.js';

const rootReducer = combineReducers({
  albums: AlbumsReducer,
  albumsListParams: AlbumsListParamsReducer,
  routes: RoutesReducer
});

export default rootReducer;
