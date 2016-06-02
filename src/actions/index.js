import axios from 'axios'

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const INIT_ALBUMS_LIST_PROPS = 'INIT_ALBUMS_LIST_PROPS';
export const CHANGE_SWITCH = 'CHANGE_SWITCH';
export const GET_JWT_BY_FACEBOOK = 'GET_JWT_BY_FACEBOOK';
export const GET_TOKEN_GOOGLE = 'GET_TOKEN_GOOGLE';

const url = "http://collector.co.il/SalesBoard/GetSalesForMobile?page=1";

export function fetchAlbums(){

  const request = axios.get(url);

  return{
    type:FETCH_ALBUMS,
    payload:request
  }
}

export function initAlbumsListProps(cellMargin, screenWidth){
  return {
    type:INIT_ALBUMS_LIST_PROPS,
    payload: {cellMargin, screenWidth}
  }
}

export function setSwitch(switchState){
  return {
    type: CHANGE_SWITCH,
    payload: switchState
  }
}

export function getJwtByFacebook(facebookAccessToken){
  return {
    type: GET_JWT_BY_FACEBOOK,
    payload: facebookAccessToken
  }
}

export function getTokenGoogle(googleAccessToken){
  return {
    type: GET_TOKEN_GOOGLE,
    payload: googleAccessToken
  }
}