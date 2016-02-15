import { combineReducers } from 'redux'
import {
	REQUEST_DIMENSION_ATTRIBUTES, 
	DIMENSION_ATTRIBUTES_RECEIVED_SUCCESS,
	DIMENSION_ATTRIBUTES_RECEIVED_ERROR, 
	ATTRIBUTE_SELECTION_CHANGED, 
	requestDimensionAttributes, 
	receivedDimensionAttributes, 
	updateAttributeSelection, 
	setDimensionName,
	fetchDimensionAttributes} from '../../actions/DimensionPickerActions';


// define the state tree for the dimenion picker.
const initialState = {
	dimenisionName: '',
	pickerIsLoading: false,
	pickerError: '',
	currentAttribute: '',
	attributeList: []
}

function dimensionPickerReducer(state = initialState, action) {

	switch(action.type) {
		case ATTRIBUTE_SELECTION_CHANGED: 
			return Object.assign({}, state, {currentAttribute: action.currentAttribute});
			break;
		case REQUEST_DIMENSION_ATTRIBUTES:
			return Object.assign({}, state, {pickerIsLoading: 'true', pickerError: ''})
			break;
		case DIMENSION_ATTRIBUTES_RECEIVED_SUCCESS:
			return Object.assign({}, state, {attributeList: action.attributeList, pickerIsLoading: false});
			break;
		case DIMENSION_ATTRIBUTES_RECEIVED_ERROR:
			return Object.assign({}, state, {pickerIsLoading: false, pickerError: action.error});
			break;
		default:
			return state;
	}
}

export default dimensionPickerReducer;
