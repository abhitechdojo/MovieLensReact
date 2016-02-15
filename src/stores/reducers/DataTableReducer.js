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
			return Object.assign({}, state.DataTable, {tableIsLoading: true, error: '', tableData: []})
		case TABLE_ITEMS_RECEIVED_SUCCESS:
			return Object.assign({}, state.DataTable, {tableData: action.data, tableIsLoading: action.isLoading, tableError: ''});
		case TABLE_ITEMS_RECEIVED_ERROR:
			return Object.assign({}, state.DataTable, {tableIsLoading: action.isLoading, tableError: action.error});
		default:
			return state;
	}
}

export default dataTableReducer;