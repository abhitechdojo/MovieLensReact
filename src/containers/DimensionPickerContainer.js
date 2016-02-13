import React from 'react';
import DimensionPickerActions from '../actions/DimensionPickerActions';
import {connect} from 'react-redux';
import DimensionPicker from './controls/DimensionPicker.jsx';

const mapStateToProps = (state) => {
	return {
		dimensionName: state.dimensionName,
		attributeList: state.attributeList,
		currentAttribute: state.currentAttribute
	}
}

const mapDispatchToProps = (state) => {
	return {
		onChange: (newValue) => {
			dispatch(updateAttributeSelection(newValue));
		},
		onLoad: () => {
			dispatch(fetchDimensionAttributes(state.dimensionName));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DimensionPicker);