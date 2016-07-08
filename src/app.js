import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  ListView,
  TouchableOpacity,
  Switch,
  Modal
} from 'react-native';

import { View } from 'react-native';

import Dimensions from 'Dimensions';
import { getSales, initAlbumsListProps, setSwitch, getJwtByFacebook } from './actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'
import ScreenSettings from './screenSettings';
import ScreenLogin from './screenLogin';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import realm from './realm/realm.js';

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  AccessToken
} = FBSDK;

class App extends Component {

  constructor(props) {
    super(props);
    var cellMargin = 10;
    var screenWidth = Dimensions.get('window').width;
    this.props.initAlbumsListProps(cellMargin, screenWidth);
    this.props.getSales(1);
  }

  renderRowCell(rowData) {
    var url = rowData.ImageUrl;
    //url = url.replace(".jpg", "_thumbnail.jpg");
    return (
      <TouchableOpacity onPress={() => { this.navigateToAlbumInfo() } } style={this.getStyleTouchableOpacity() }>
        <Image source={{ uri: url }} style={this.getCellStyle() } />
      </TouchableOpacity>

    )
  }

  getStyleTouchableOpacity() {
    console.log(this.props.albumsListParams.cellMargin);
    return {
      margin: this.props.albumsListParams.cellMargin,
      elevation: 3,
      backgroundColor: "white" //Without this the elevation is not shown for some reason.      
    }
  }

  getCellStyle() {
    console.log(this.props.albumsListParams.cellWidth);
    return {
      height: this.props.albumsListParams.cellWidth,
      width: this.props.albumsListParams.cellWidth,
    };
  }

  onEndReached() {
    this.props.getSales(1);
  }

  navigateToAlbumInfo() {
    this.props.navigator.push({
      component: ScreenSettings
    });
  }

  navigateToSettings() {
    this.refs['DRAWER_REF'].closeDrawer();
    this.props.navigator.push({
      component: ScreenSettings
    });
  }

  regularSalePressed(thisContext) {

    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        }
        else if (result.error) {
          alert('Login error' + result.error);
        }
        else {

          AccessToken.getCurrentAccessToken().then(
            (data) => {
              var faceBookAccessToken = data.accessToken.toString();
              thisContext.props.getJwtByFacebook(faceBookAccessToken, "goToNewRegularSale");           
            })
        }
      },
      function (error) {
        alert('Login fail with error: ' + error);
      }
    );
  }

  bidSalePressed(thisContext){
    
  }

  render() {

    const dataSource = this.props.albumsListParams.dataSource;
    var ds = dataSource.cloneWithRows(this.props.albums);

    var drawerMenu = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <TouchableOpacity onPress={() => { this.navigateToSettings() } }>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Settings</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        ref={'DRAWER_REF'}
        drawerWidth={300}
        renderNavigationView={() => drawerMenu}>
        <View style={styles.containerView}>
          <Spinner visible={this.props.uiState.showSpinner} />
          <ToolbarAndroid
            navIcon={require('./images/ic_menu_white_24dp.png') }
            onIconClicked={() => { this.refs['DRAWER_REF'].openDrawer() } }
            actions={[
              { title: 'Bla', icon: require('./images/ic_search_white_24dp.png'), show: 'always' },
              { title: 'Settings', show: 'never' }]}
            style={styles.toolbar}
            title='אספן התקליטים'
            titleColor='white'
            subtitleColor='white'/>
          <ScrollableTabView
            tabBarBackgroundColor="#ffb31a"
            tabBarUnderlineColor="white"
            tabBarActiveTextColor="white">
            <ListView
              style={styles.albumsListView}
              tabLabel="הוצאות למכירה"
              enableEmptySections={true}
              contentContainerStyle={styles.list}
              dataSource={ds}
              onEndReached={this.onEndReached.bind(this) }
              pageSize={2}
              renderRow={(rowData) => this.renderRowCell(rowData) }/>
            <View tabLabel="ההוצאות שלי">
              <ScreenLogin />
            </View>
          </ScrollableTabView>
          <ActionButton buttonColor="#0288D1">
            <ActionButton.Item buttonColor='#ffb31a' title="מכירה פומבית" onPress={() => this.bidSalePressed(this) }>
              <Icon name="gavel" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#ffb31a' title="מכירה רגילה" onPress={() => this.regularSalePressed(this) } >
              <Icon name="ils" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSales, initAlbumsListProps, setSwitch, getJwtByFacebook }, dispatch);
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
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
    backgroundColor: '#ffb31a',
    height: 56
  },
  containerView: {
    flex: 1 //Without this the listview won't scroll. It is like setting the height to 100%
  },
  albumsListView: {
    paddingTop: 5

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
