import axios from 'axios'

export const INIT_ALBUMS_LIST_PROPS = 'INIT_ALBUMS_LIST_PROPS';
export const GET_JWT_BY_FACEBOOK = 'GET_JWT_BY_FACEBOOK';
export const GET_TOKEN_GOOGLE = 'GET_TOKEN_GOOGLE';
export const GET_SALES = 'GET_SALES';
export const GET_SALES_FINISHED = 'GET_SALES_FINISHED';
export const SPINNER_SHOW = 'SPINNER_SHOW';
export const SPINNER_HIDE = 'SPINNER_HIDE';
export const NAVIGATE = 'NAVIGATE'
export const NAV_PUSH = 'NAV_PUSH'
export const NAV_POP = 'NAV_POP'
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY'
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX'
export const NAV_RESET = 'NAV_RESET'

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

// *** Action Creators ***
// The following action creators were derived from NavigationStackReducer
export function navigatePush(state) {
	state = typeof state === 'string' ? { key: state, title: state } : state
	return {
		type: NAV_PUSH,
		state
	}
}

export function navigatePop() {
	return {
		type: NAV_POP
	}
}

export function navigateJumpToKey(key) {
	return {
		type: NAV_JUMP_TO_KEY,
		key
	}
}

export function navigateJumpToIndex(index) {
	return {
		type: NAV_JUMP_TO_INDEX,
		index
	}
}

export function navigateReset(routes, index) {
	return {
		type: NAV_RESET,
		index,
		routes
	}
}