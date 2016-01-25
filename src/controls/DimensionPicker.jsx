import React from 'react';
import DimensionPickerAction from '../actions/DimensionPickerActions.js';
import MovieLensAppStore from '../stores/MovieLensAppStore.js';

class DimensionPicker extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { items: [], currentItem: '' };
	}

	getInitialState() {
		this.state = {
			items: MovieLensAppStore.getAttributes(this.props.dimension),
			currentItem : MovieLensAppStore.getCurrentAttribute(this.props.dimension)
		};
	}

	onSelectionChange(newValue) {
		DimensionPickerAction.selectionChange(this.props.dimension, newValue);
	}

	render() {
		var optionNodes = this.state.items.map((item) => {
			if (item === this.state.currentItem) 
				return(<option value="{item}" selected>{item}</option>)				
			else
				return(<option value="{item}">{item}</option>)
		});
		return(<div><select onchange="onSelectionChange">{optionNodes}</select></div>);
	}

}

export default DimensionPicker;
