import React, {
  AppRegistry,
  Component,
  Navigator
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
  
  renderScene(route, navigator){
    return <route.component navigator={navigator} {...route.passProps}/>
  }
  
  render() {
    return (
      <Provider store={store}>
        <Navigator
        renderScene={this.renderScene} 
        initialRoute={{component:App}}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FadeAndroid;
        }}
        />        
      </Provider>
    );
  }
}


AppRegistry.registerComponent('collectormobile', () => collectormobile);
