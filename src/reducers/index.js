import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums.js';
import AlbumsListParamsReducer from './reducer_albumsListParamsReducer.js';
import RoutesReducer from './reducer_routes.js';
import UIStateReducer from './reducer_uiState.js';
import NavigationReducer from './reducer_navigation.js';

const rootReducer = combineReducers({
  albums: AlbumsReducer,
  albumsListParams: AlbumsListParamsReducer,
  routes: RoutesReducer,
  uiState: UIStateReducer,
  navigationState : NavigationReducer
});

export default rootReducer;
