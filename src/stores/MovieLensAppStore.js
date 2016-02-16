import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import DataTableReducer from './reducers/DataTableReducer';
import DimensionPickerReducer from './reducers/DimensionPickerReducer';
import {fetchDimensionAttributes, updateAttributeSelection} from '../actions/DimensionPickerActions';
import {getTableData} from '../actions/TableControlActions';
import initialState from './reducers/InitialState';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers(
    { 
        DimensionPicker: DimensionPickerReducer,
        DataTable: DataTableReducer
    }
);

const store = createStore(
    rootReducer,  
    initialState,
	applyMiddleware(
        thunkMiddleware, 
        loggerMiddleware
    )
);

store.dispatch(fetchDimensionAttributes);
const defaultGenre = store.getState().DimensionPicker.attributeList[0];
store.dispatch(updateAttributeSelection(defaultGenre));
store.dispatch(getTableData(defaultGenre));
export default store;
