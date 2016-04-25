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
import MainScreen from './src/mainScreen';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);
const RouterWithRedux = connect()(Router);

class collectormobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="yaron" component={App} initial={true}>
            <Scene key="modal" component={Modal} >
              <Scene key="stam" component={MainScreen}  />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('collectormobile', () => collectormobile);
