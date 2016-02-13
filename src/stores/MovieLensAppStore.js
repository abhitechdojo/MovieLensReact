import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import DataTableReducer from './reducers/DataTableReducer';
import DimensionPickerReducer from './reducers/DimensionPickerReducer';

const combinedReducer = combineReducers({
	dataTable: DataTableReducer,
	dimensionPicker: DimensionPickerReducer
});
export default applyMiddleware(thunk)(createStore)(
	combinedReducer, 
	{
        dimenisionName: '',
        isLoading :'false',
        error : '',
        currentAttribute: '',
        attributeList: []
    }
);