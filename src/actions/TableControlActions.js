import fetch from 'isomorphic-fetch'

export const REQUEST_TABLE_ITEMS = "REQUEST_TABLE_ITEMS";
export const TABLE_ITEMS_RECEIVE_SUCCESS = "TABLE_ITEMS_RECEIVE_SUCCESS";
export const TABLE_ITEMS_RECEIVE_ERROR = "TABLE_ITEMS_RECEIVE_ERROR";
export const TABLE_SORTED = "TABLE_SORTED";

export function requestTableItems(filter) {
	return {
		type: REQUEST_TABLE_ITEMS,
		tableIsLoading: true
	}
}

export function tableSorted(sortedArray) {
	return {
		type: TABLE_SORTED,
		tableData: sortedArray
	}
}

export function itemsReceivedSuccess(data) {
	return {
		type: TABLE_ITEMS_RECEIVE_SUCCESS,
		tableData: data,
		tableIsLoading: false,
	}
}

export function itemsReceivedError(error) {
	return {
		type: TABLE_ITEMS_RECEIVE_ERROR,
		isLoading: false,
		tableError: error
	}
}
