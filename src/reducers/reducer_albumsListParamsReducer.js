import {INIT_ALBUMS_LIST_PROPS} from '../actions/index';
import React, {
  ListView
} from 'react-native';

var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var INITIAL_STATE = {dataSource : dataSource, cellMargin : null, cellWidth : null};

export default function(state = INITIAL_STATE, action){

  console.log("in reducer params:");
  console.log(action.type);

  switch(action.type){

    case INIT_ALBUMS_LIST_PROPS:
    var cellMargin = action.payload.cellMargin;
    var screenWidth = action.payload.screenWidth;
    var cellWidth = (screenWidth - 4 * cellMargin) / 2;
    return {dataSource : dataSource, cellMargin : cellMargin, cellWidth : cellWidth};

    default:
    return state;
  }
}
