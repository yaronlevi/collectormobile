/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

class collectormobile extends Component {
  render() {
    return (

      <ToolbarAndroid
            navIcon={require('./src/images/ic_menu_black_24dp.png')}
            onIconClicked={() => console.log('clicked')}
            actions={[
              {title: 'Bla',icon:require('./src/images/ic_search_black_24dp.png'), show: 'always'},
              {title: 'Settings', show: 'never'}]}
            style={styles.toolbar}
            title='אספן התקליטים'/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  }
});

AppRegistry.registerComponent('collectormobile', () => collectormobile);
