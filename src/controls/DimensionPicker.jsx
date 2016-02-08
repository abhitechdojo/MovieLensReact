import React from 'react';
import DimensionPickerAction from '../actions/DimensionPickerActions.js';
import MovieLensAppStore from '../stores/MovieLensAppStore.js';

class DimensionPicker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			dimensionName: this.props.dimension,
			items: MovieLensAppStore.getAttributes(this.props.dimension),
			currentItem : MovieLensAppStore.getCurrentAttribute(this.props.dimension)
		};
	}

	onSelectionChange(event) {
		console.log(event.target.value)
		DimensionPickerAction.selectionChange(this.state.dimensionName, event.target.value);
	}

	render() {
		var optionNodes = this.state.items.map((item) => {
			return(<option key={item.id} value={item.val}>{item.val}</option>)
		});
		return(<div><select onChange={(event) => { this.onSelectionChange(event) }} defaultValue={this.state.currentItem}>{optionNodes}</select></div>);
	}

}

export default DimensionPicker;
