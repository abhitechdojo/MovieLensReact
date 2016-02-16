import {combineReducers} from 'redux';
import initialState from './InitialState';

import {
	REQUEST_TABLE_ITEMS, 
	TABLE_ITEMS_RECEIVED_SUCCESS,
	TABLE_ITEMS_RECEIVED_ERROR,	 
	TABLE_SORTED, 
	requestTableItems,  
	tableSorted} from '../../actions/TableControlActions';


function dataTableReducer(state = initialState, action) {

	switch(action.type) {
		case REQUEST_TABLE_ITEMS:
			return Object.assign({}, state.DataTable, {isLoading: true, error: '', data: [], keys: [], columns: [], sortBy: {}})
		case TABLE_ITEMS_RECEIVED_SUCCESS:
			return Object.assign({}, state.DataTable, {data: action.data, keys: action.keys, columns: action.columns, sortBy: action.sortBy, isLoading: action.isLoading, error: ''});
		case TABLE_ITEMS_RECEIVED_ERROR:
			return Object.assign({}, state.DataTable, {isLoading: action.isLoading, error: action.error});
		default:
			return state;
	}
}

export default dataTableReducer;