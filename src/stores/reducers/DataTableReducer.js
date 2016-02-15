import {combineReducers} from 'redux';
import {
	REQUEST_TABLE_ITEMS, 
	TABLE_ITEMS_RECEIVED_SUCCESS,
	TABLE_ITEMS_RECEIVED_ERROR,	 
	TABLE_SORTED, 
	requestTableItems,  
	tableSorted} from '../../actions/TableControlActions';

	// define the state tree for the dimenion picker.
const initialState = {
	tableData: [],
	tableIsLoading:false,
	tableError: ''
}

function dataTableReducer(state = initialState, action) {

	switch(action.type) {
		case REQUEST_TABLE_ITEMS:
			return Object.assign({}, state, {tableIsLoading: true, error: '', tableData: []})
			break;
		case TABLE_ITEMS_RECEIVED_SUCCESS:
			return Object.assign({}, state, {tableData: action.data, tableIsLoading: action.isLoading, tableError: ''});
			break;
		case TABLE_ITEMS_RECEIVED_ERROR:
			return Object.assign({}, state, {tableIsLoading: action.isLoading, tableError: action.error});
			break;			
		default:
			return state;
			break;
	}
}

export default dataTableReducer;