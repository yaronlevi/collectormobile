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
  ToolbarAndroid,
  DrawerLayoutAndroid
} from 'react-native';

class collectormobile extends Component {
  render() {

    var drawerMenu = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I am in the Drawer!</Text></View>
    );

    return (

      <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => drawerMenu}>

          <ToolbarAndroid
            rtl={true}
            navIcon={require('./src/images/ic_menu_black_24dp.png')}
            onIconClicked={() => console.log('clicked')}
            actions={[
              {title: 'Bla',icon:require('./src/images/ic_search_black_24dp.png'), show: 'always'},
              {title: 'Settings', show: 'never'}]}
            style={styles.toolbar}
            title='אספן התקליטים'/>

            </DrawerLayoutAndroid>

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
