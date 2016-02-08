import fetch from 'isomorphic-fetch'

export REQUEST_TABLE_ITEMS = "REQUEST_TABLE_ITEMS";
export TABLE_ITEMS_RECEIVED = "TABLE_ITEMS_RECEIVED";
export TABLE_SORTED = "TABLE_SORTED";

export function requestTableItems() {
	return {
		type: REQUEST_TABLE_ITEMS
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
		data: data
	}
}
