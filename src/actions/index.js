import axios from 'axios'

export const INIT_ALBUMS_LIST_PROPS = 'INIT_ALBUMS_LIST_PROPS';
export const GET_JWT_BY_FACEBOOK = 'GET_JWT_BY_FACEBOOK';
export const GET_TOKEN_GOOGLE = 'GET_TOKEN_GOOGLE';
export const GET_SALES = 'GET_SALES';
export const GET_SALES_FINISHED = 'GET_SALES_FINISHED';
export const SPINNER_SHOW = 'SPINNER_SHOW';
export const SPINNER_HIDE = 'SPINNER_HIDE';

const url = "http://collector.co.il/SalesBoard/GetSalesForMobile?page=1";

export function initAlbumsListProps(cellMargin, screenWidth) {
  return {
    type: INIT_ALBUMS_LIST_PROPS,
    payload: { cellMargin, screenWidth }
  }
}

export function getJwtByFacebook(facebookAccessToken, goToWhenFinish) {
  return {
    type: GET_JWT_BY_FACEBOOK,
    payload: { facebookAccessToken: facebookAccessToken, goToWhenFinish: goToWhenFinish }
  }
}

export function getTokenGoogle(googleAccessToken) {
  return {
    type: GET_TOKEN_GOOGLE,
    payload: googleAccessToken
  }
}

export function getSales(page) {
  return {
    type: GET_SALES,
    payload: page
  }
}