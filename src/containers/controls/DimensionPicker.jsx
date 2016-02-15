import React, {PropTypes} from 'react';
import Select from 'react-select';

const DimensionPicker = ({dimensionName, onChange, attributeList, currentAttribute}) => {
	return (
		<div>
			<Select 
				value={currentAttribute} 
				options={attributeList} 
				onChange={e => 
					onChange(e.value)
				} 
			/>
		</div>		
	)
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
