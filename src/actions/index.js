import axios from 'axios'

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const INIT_ALBUMS_LIST_PROPS = 'INIT_ALBUMS_LIST_PROPS';

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
