import React from 'react';
import {updateAttributeSelection} from '../actions/DimensionPickerActions';
import {connect} from 'react-redux';
import DimensionPicker from './controls/DimensionPicker.jsx';

const mapStateToProps = (state) => {
	return {
		attributeList : state.attributeList,
		currentAttribute : state.currentAttribute
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (newValue) => {
			dispatch(updateAttributeSelection(newValue));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DimensionPicker);