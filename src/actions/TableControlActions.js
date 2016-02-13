import fetch from 'isomorphic-fetch'

export const REQUEST_TABLE_ITEMS = "REQUEST_TABLE_ITEMS";
export const TABLE_ITEMS_RECEIVE_SUCCESS = "TABLE_ITEMS_RECEIVE_SUCCESS";
export const TABLE_ITEMS_RECEIVE_ERROR = "TABLE_ITEMS_RECEIVE_ERROR";
export const TABLE_SORTED = "TABLE_SORTED";

export function requestTableItems(filter) {
	return {
		type: REQUEST_TABLE_ITEMS,
		isLoading: true
	}
}

export function tableSorted(sortedArray) {
	return {
		type: TABLE_SORTED,
		data: sortedArray
	}
}

export function itemsReceived(data) {
	return {
		type: TABLE_ITEMS_RECEIVED,
		data: data,
		isLoading: false
	}
}
