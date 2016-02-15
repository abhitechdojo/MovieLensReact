import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import DataTableReducer from './reducers/DataTableReducer';
import DimensionPickerReducer from './reducers/DimensionPickerReducer';

const loggerMiddleware = createLogger();
const store = createStore(
	combineReducers({
        DataTableReducer,
        DimensionPickerReducer
    }), 
	applyMiddleware(
        thunkMiddleware, 
        loggerMiddleware
    )
);

export default store;
