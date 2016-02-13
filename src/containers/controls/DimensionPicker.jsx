import {PropTypes, React, Component} from 'react';
import Select from 'react-select';

class DimensionPicker extends Component {
	componentDidMount() {
		const {onLoad} = this.props;
		onLoad();
	}
	render() {
		const {onChange, attributeList, currentAttribute} = this.props;
		return (
			<div>
				<Select value={currentAttribute} options={attributeList} onChange={onChange} />
			</div>
		)		
	}
}

DimensionPicker.propTypes = {
	dimensionName: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	attributeList: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired
	}).isRequired).isRequired,
	currentAttribute: PropTypes.string.isRequired
}

export default DimensionPicker;
