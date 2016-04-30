import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './src/app';
import reducers from './src/reducers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Router, Scene, Modal, Actions } from 'react-native-router-flux';
import ScreenAlbumInfo from './src/screenAlbumInfo';
import ScreenSettings from './src/screenSettings';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);
const RouterWithRedux = connect()(Router);

class collectormobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="mainScreen" component={App} hideNavBar={true} initial={true}/>
            <Scene key="albumInfo" component={ScreenAlbumInfo} hideNavBar={true}  />
            <Scene key="settings" component={ScreenSettings} hideNavBar={true}  />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('collectormobile', () => collectormobile);
