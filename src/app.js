import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  ListView,
  TouchableHighlight
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
      <TouchableHighlight onPress={ () => Actions.stam()}>
        <Image source={{ uri: url }} style={this.getCellStyle() } />
      </TouchableHighlight>
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

    var x = 3;


    const dataSource = this.props.albumsListParams.dataSource;
    var ds = dataSource.cloneWithRows(this.props.albums);

    var drawerMenu = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I am in the Drawer!</Text></View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawerMenu}>
        <ToolbarAndroid
          rtl={true}
          navIcon={require('./images/ic_menu_black_24dp.png') }
          onIconClicked={() => console.log('clicked') }
          actions={[
            { title: 'Bla', icon: require('./images/ic_search_black_24dp.png'), show: 'always' },
            { title: 'Settings', show: 'never' }]}
          style={styles.toolbar}
          title='אספן התקליטים'/>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={ds}
          onEndReached={this.onEndReached.bind(this) }
          pageSize={2}
          renderRow={(rowData) => this.renderRowCell(rowData) }/>
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
    height: 56,
  }
});
