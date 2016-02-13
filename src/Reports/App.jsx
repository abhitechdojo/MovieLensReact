import React from 'react';
import DimensionPicker from '../containers/DimensionPickerContainer';
import TableControl from '../containers/TableControlContainer';

const App = () => (
	<div>
	<DimensionPicker dimensionName="Genre"/>
	<TableControl />
	</div>
	)

export default App;