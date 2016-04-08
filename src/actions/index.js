import axios from 'axios'

export const FETCH_ALBUMS = 'FETCH_ALBUMS';

const url = "http://collector.co.il/SalesBoard/GetSalesForMobile?page=1";

export function fetchAlbums(){

  const request = axios.get(url);

  return{
    type:FETCH_ALBUMS,
    payload:request
  }
}
