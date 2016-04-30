import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  ListView,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
import { fetchAlbums, initAlbumsListProps } from './actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'

class App extends Component {

  constructor(props) {
    super(props);

    var cellMargin = 3;
    var screenWidth = Dimensions.get('window').width;
    this.props.initAlbumsListProps(cellMargin, screenWidth);
    this.props.fetchAlbums();
  }

  renderRowCell(rowData) {
    var url = rowData.ImageUrl;
    return (
      <TouchableOpacity onPress={Actions.albumInfo}>
        <Image source={{ uri: url }} style={this.getCellStyle() } />
      </TouchableOpacity>
    )
  }

  getCellStyle() {
    return {
      margin: this.props.albumsListParams.cellMargin,
      height: this.props.albumsListParams.cellWidth,
      width: this.props.albumsListParams.cellWidth
    };
  }

  onEndReached() {
    this.props.fetchAlbums();
  }

  render() {

    const dataSource = this.props.albumsListParams.dataSource;
    var ds = dataSource.cloneWithRows(this.props.albums);

    var drawerMenu = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <TouchableOpacity onPress={()=>{this.refs['DRAWER_REF'].closeDrawer();Actions.settings()}}>
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
          <ToolbarAndroid
            rtl={false}
            navIcon={require('./images/ic_menu_black_24dp.png') }
            onIconClicked={() => { this.refs['DRAWER_REF'].openDrawer() } }
            actions={[
              { title: 'Bla', icon: require('./images/ic_search_black_24dp.png'), show: 'always' },
              { title: 'Settings', show: 'never' }]}
            style={styles.toolbar}
            title='אספן התקליטים'/>
          <ListView
            enableEmptySections={true}
            contentContainerStyle={styles.list}
            dataSource={ds}
            onEndReached={this.onEndReached.bind(this) }
            pageSize={2}
            renderRow={(rowData) => this.renderRowCell(rowData) }/>
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAlbums, initAlbumsListProps }, dispatch);
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
  item: {
    backgroundColor: 'red',
    margin: 5,
    height: 170,
    width: 170
  },
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
    height: 56
  },
  containerView: {
    flex: 1 //Without this the listview won't scroll. It is like setting the height to 100%
  }
});
