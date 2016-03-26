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
  DrawerLayoutAndroid,
  ListView
} from 'react-native';

import Dimensions from 'Dimensions';

var dummyData = ['1', '2', '3', '4','5', '6','7', '8','9', '10','11', '12','13', '14','15', '16'];

class collectormobile extends Component {

  constructor(props){
    super(props);

    var cellMargin = 3;
    var screenWidth = Dimensions.get('window').width;
    var cellWidth = (screenWidth - 4 * cellMargin) / 2;
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      listViewDataSrc: ds,
      dataSource: ds.cloneWithRows(dummyData),
      cellWidth: cellWidth,
      cellMargin: cellMargin
    };
  }

  renderRowCell(rowData){
    return <View style={this.getCellStyle()}><Text>{rowData}</Text><Text>{this.state.cellWidth}</Text></View>
  }

  getCellStyle(){
    return{
        backgroundColor: 'red',
        margin:this.state.cellMargin,
        height:this.state.cellWidth,
        width:this.state.cellWidth
    };
  }

  addMoreDummyData(){

    var dummyLen = dummyData.length;
    var extra = dummyLen + 6;

    for(var i = dummyLen; i <= extra ;i++)
    {
      var newInd = i + 1;
      dummyData.push(newInd.toString());
    }
  }

  onEndReached(){
    console.log("onEndReached");
    this.addMoreDummyData();
    this.setState({dataSource:this.state.listViewDataSrc.cloneWithRows(dummyData)});
  }

  render() {


    console.log("in render");


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

            <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            onEndReached={this.onEndReached.bind(this)}
            pageSize={2}
            renderRow={(rowData) => this.renderRowCell(rowData)}/>

            </DrawerLayoutAndroid>

    );
  }
}

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

AppRegistry.registerComponent('collectormobile', () => collectormobile);
