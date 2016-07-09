import React, { Component } from 'react';
import {View, Text, ToolbarAndroid, StyleSheet} from "react-native";
import {Actions} from 'react-native-router-flux'

export default class ScreenAlbumInfo extends React.Component {

    render() {

        return (
            <View>
                <ToolbarAndroid
                    navIcon={require('../images/ic_arrow_back_black_24dp.png') }      
                    onIconClicked={Actions.pop}              
                    actions={[
                        { title: 'Bla', icon: require('../images/ic_search_black_24dp.png'), show: 'always' },
                        { title: 'Settings', show: 'never' }]}
                    style={styles.toolbar}
                    title='מידע על תקליט'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  }
});




