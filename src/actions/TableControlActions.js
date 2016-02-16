import fetch from 'isomorphic-fetch';
import Firebase from 'firebase';

export const REQUEST_TABLE_ITEMS = "REQUEST_TABLE_ITEMS";
export const TABLE_ITEMS_RECEIVE_SUCCESS = "TABLE_ITEMS_RECEIVE_SUCCESS";
export const TABLE_ITEMS_RECEIVE_ERROR = "TABLE_ITEMS_RECEIVE_ERROR";
export const TABLE_SORTED = "TABLE_SORTED";

export function requestTableItems() {
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

export function itemsReceivedSuccess(keys, columns, data, sortBy) {
	return {
		type: TABLE_ITEMS_RECEIVE_SUCCESS,
		data: data,
		keys: keys,
		columns: columns, 
		sortBy: sortBy,
		isLoading: false
	}
}

export function itemsReceivedError(error) {
	return {
		type: TABLE_ITEMS_RECEIVE_ERROR,
		isLoading: false,
		error: error
	}
}

export function getTableData(filter) {
	return (dispatch) => {
		// set the table in loading state.
		dispatch(requestTableItems());
		var fireBaseRef = new Firebase("https://movielen4.firebaseio.com/movieLens/movies");
		fireBaseRef.orderByChild("genre").equalTo(filter).once('value', function(moviesRef) {
			const movies = moviesRef.val(); // all the movies
			const keys = ['title'];
			const columns = [{title: 'Title', prop: 'title'}, {title: 'Year', prop: 'year'}];
			const data = movies.map((movie) => { return {title: movie.title, year: movie.year}});
			const sortBy = {prop: 'year', order: 'descending'};
			dispatch(itemsReceivedSuccess(keys, columns, data, sortBy));
		}, function(error) {
			dispatch(itemsReceivedError(error));
		});
	}
}
