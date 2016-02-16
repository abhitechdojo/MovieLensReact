import React from 'react';
import DimensionPicker from '../containers/DimensionPickerContainer';
import TableControl from '../containers/TableControlContainer';

const App = () => (
	<div>
    	<DimensionPicker dimensionName="genre"/>
        <DimensionPicker dimensionName="year"/>
    	<TableControl />
	</div>
)

export default App;