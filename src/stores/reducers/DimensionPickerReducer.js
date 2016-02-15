import { combineReducers } from 'redux'
import initialState from './InitialState';

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

function dimensionPickerReducer(state = initialState, action) {

	switch(action.type) {
		case ATTRIBUTE_SELECTION_CHANGED: 
			return Object.assign({}, state.DimensionPicker, {currentAttribute: action.currentAttribute});
		case REQUEST_DIMENSION_ATTRIBUTES:
			return Object.assign({}, state.DimensionPicker, {pickerIsLoading: true, pickerError: ''});
		case DIMENSION_ATTRIBUTES_RECEIVED_SUCCESS:
			return Object.assign({}, state.DimensionPicker, {attributeList: action.attributeList, pickerIsLoading: false});
		case DIMENSION_ATTRIBUTES_RECEIVED_ERROR:
			return Object.assign({}, state.DimensionPicker, {pickerIsLoading: false, pickerError: action.error});
		default:
			return state;
	}
}

export default dimensionPickerReducer;
