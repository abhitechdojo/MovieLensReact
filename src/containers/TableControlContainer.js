import React from 'react';
import {connect} from 'react-redux';
import TableControl from './controls/TableControl.jsx';
import TableControlActions from '../actions/TableControlActions'

const mapStateToProps = (state) => {
    return {
	   tableData: state.DataTable.tableData
    }
}

const mapDispatchToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableControl);
