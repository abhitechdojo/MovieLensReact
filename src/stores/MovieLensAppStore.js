import {createStore} from 'redux';
import dpReducer from '../reducers/DimensionPickerReducer.js';
export default createStore(dpReducer);