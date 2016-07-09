import React, { Component } from 'react';

import {
  AppRegistry
} from 'react-native';

import reducers from './src/reducers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Router, Scene, Modal, Actions } from 'react-native-router-flux';
import ScreenSaleInfo from './src/screens/screenSaleInfo';
import ScreenSettings from './src/screens/screenSettings';
import ScreenSales from './src/screens/screenSales';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/sagas';

const RouterWithRedux = connect()(Router);
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const sagaMiddleware = createSagaMiddleware()
const store = createStoreWithMiddleware(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

class collectormobile extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="sales" component={ScreenSales} hideNavBar={true} initial={true}/>
            <Scene key="saleInfo" component={ScreenSaleInfo} hideNavBar={true} direction="horizontal"  panHandlers={null} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('collectormobile', () => collectormobile);
