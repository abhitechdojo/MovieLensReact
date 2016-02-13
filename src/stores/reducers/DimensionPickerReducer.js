import { combineReducers } from 'redux'
import {
	REQUEST_DIMENSION_ATTRIBUTES, 
	DIMENSION_ATTRIBUTES_RECEIVED, 
	ATTRIBUTE_SELECTION_CHANGED, 
	SET_DIMENSION_NAME, 
	requestDimensionAttributes, 
	receivedDimensionAttributes, 
	updateAttributeSelection, 
	setDimensionName,
	fetchDimensionAttributes} from '../../actions/DimensionPickerActions';


// define the state tree for the dimenion picker.
const initialState = {
	dimenisionName: '',
	isLoading :'false',
	error : '',
	currentAttribute: '',
	attributeList: []
}

function dimensionPickerReducer(state = initialState, action) {

	switch(action.type) {
		case ATTRIBUTE_SELECTION_CHANGED: 
			return Object.assign({}, state, {currentAttribute: action.data});
			break;
		case REQUEST_DIMENSION_ATTRIBUTES:
			return Object.assign({}, state, {isLoading: 'true', error: ''})
			break;
		case DIMENSION_ATTRIBUTES_RECEIVED:
			return Object.assign({}, state, {attributeList: action.data, isLoading: 'false', error: action.error});
			break;
		case SET_DIMENSION_NAME:
			return Object.assign({}, state, {dimensionName: action.data})
			break;
		default:
			return state;
			break;
	}
}

export default dimensionPickerReducer;