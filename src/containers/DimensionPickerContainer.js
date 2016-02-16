import React from 'react';
import {updateAttributeSelection} from '../actions/DimensionPickerActions';
import {getTableData} from '../actions/TableControlActions';
import {connect} from 'react-redux';
import DimensionPicker from './controls/DimensionPicker.jsx';

const mapStateToProps = (state) => {
    console.log(state);
	return {
		attributeList : state.DimensionPicker.attributeList,
		currentAttribute : state.DimensionPicker.currentAttribute
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (newValue) => {
			dispatch(updateAttributeSelection(newValue));
			dispatch(getTableData(newValue));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DimensionPicker);