import React from 'react';
import DimensionPickerAction from '../actions/DimensionPickerActions.js';
import MovieLensAppStore from '../stores/MovieLensAppStore.js';

class DimensionPicker extends React.Component {
	
	constructor(props) {
		super(props);
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
			return(<option key={item.id} value={item.val}>{item.val}</option>)
		});
		return(<div><select onchange="onSelectionChange" defaultValue={this.state.currentItem}>{optionNodes}</select></div>);
	}

}

export default DimensionPicker;
