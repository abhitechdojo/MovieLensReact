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
	data: '',
	isLoading :'false',
	error : ''
}

function dataTableReducer(state = initialState, action) {

	switch(action.type) {
		case REQUEST_TABLE_ITEMS:
			return Object.assign({}, state, {isLoading: 'true', error: ''})
			break;
		case TABLE_ITEMS_RECEIVED_SUCCESS:
			return Object.assign({}, state, {data: action.data, isLoading: action.isLoading});
			break;
		case TABLE_ITEMS_RECEIVED_ERROR:
			return Object.assign({}, state, {isLoading: action.isLoading, error: action.error});
			break;			
		default:
			return state;
			break;
	}
}

export default dataTableReducer;