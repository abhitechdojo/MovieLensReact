import React, {PropTypes} from 'react';
import {DataTable} from 'react-data-components';

const TableControl = ({keys, columns, data, sortBy}) => {
	return (
		<DataTable 
			className="container" 
			keys={keys} //{[ 'name', 'address' ]}
			columns={columns} 
			initialData={data} 
			initialPageLength={5} 
			initialSortBy= {sortBy} // {{ prop: 'city', order: 'descending' }} 
			pageLengthOptions={[ 5, 20, 50 ]} 
		/>
	)
}

TableControl.propTypes = {
		keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
		columns: PropTypes.arrayOf(PropTypes.shape({
			label: PropTypes.string.isRequired,
			prop: PropTypes.string.isRequired
		}).isRequired).isRequired,
		data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
		sortBy: PropTypes.shape({
			prop: PropTypes.string.isRequired,
			order: PropTypes.string.isRequired
		}).isRequired
}

export default TableControl;
