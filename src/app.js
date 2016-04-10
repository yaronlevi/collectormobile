import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  ListView
} from 'react-native';

import Dimensions from 'Dimensions';
import { fetchAlbums, initAlbumsListProps } from './actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var dummyData = ['1', '2', '3', '4','5', '6','7', '8','9', '10','11', '12','13', '14','15', '16'];

class App extends Component {

  constructor(props){
    super(props);

    var cellMargin = 3;
    var screenWidth = Dimensions.get('window').width;
    initAlbumsListProps(cellMargin, screenWidth);
  }

  renderRowCell(rowData){
    var num = rowData % 7;
    var url = `https://meetz.blob.core.windows.net/stam/${num}.png`;
    return <Image source={{uri: url}} style={this.getCellStyle()} />
  }

  getCellStyle(){
    return{
        margin:this.state.albumsListParams.cellMargin,
        height:this.state.albumsListParams.cellWidth,
        width:this.state.albumsListParams.cellWidth
    };
  }

  onEndReached(){
    console.log("onEndReached");
    this.props.fetchAlbums();
    //this.setState({dataSource:this.state.listViewDataSrc.cloneWithRows(dummyData)});
  }

  render(){

    const dataSource = this.state.dataSource.cloneWithRows(this.state.albums);

    var drawerMenu = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I am in the Drawer!</Text></View>
    );

    return(
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawerMenu}>
        <ToolbarAndroid
          rtl={true}
          navIcon={require('./images/ic_menu_black_24dp.png')}
          onIconClicked={() => console.log('clicked')}
          actions={[
            {title: 'Bla',icon:require('./images/ic_search_black_24dp.png'), show: 'always'},
            {title: 'Settings', show: 'never'}]}
          style={styles.toolbar}
          title='אספן התקליטים'/>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={dataSource}
          onEndReached={this.onEndReached.bind(this)}
          pageSize={2}
          renderRow={(rowData) => this.renderRowCell(rowData)}/>
      </DrawerLayoutAndroid>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchAlbums}, dispatch);
}

function mapStateToProps(state){
  console.log("state is:");
  console.log(state);
  return state;
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

const styles = StyleSheet.create({
  list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin:5,
        height:170,
        width:170
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
