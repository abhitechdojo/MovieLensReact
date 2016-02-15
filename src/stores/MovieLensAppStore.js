import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import DataTableReducer from './reducers/DataTableReducer';
import DimensionPickerReducer from './reducers/DimensionPickerReducer';
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

export default store;
