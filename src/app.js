class app extends Component {

  var drawerMenu = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
    <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I am in the Drawer!</Text></View>
  );

  renderRowCell(rowData){
    var num = rowData % 7;
    var url = `https://meetz.blob.core.windows.net/stam/${num}.png`;
    return <Image source={{uri: url}} style={this.getCellStyle()} />
    // return <View style={this.getCellStyle()}><Text>{rowData}</Text><Text>{this.state.cellWidth}</Text></View>
  }

  getCellStyle(){
    return{
        margin:this.state.cellMargin,
        height:this.state.cellWidth,
        width:this.state.cellWidth
    };
  }

  render(){
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
  }
}
