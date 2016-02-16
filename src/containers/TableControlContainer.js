import React from 'react';
import {connect} from 'react-redux';
import TableControl from './controls/TableControl.jsx';
import TableControlActions from '../actions/TableControlActions'

const mapStateToProps = (state) => {
    return {
        keys: state.DataTable.keys,
        columns: state.DataTable.columns,
        data: state.DataTable.tableData,
        sortBy: state.DataTable.sortBy
    }
}

const mapDispatchToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableControl);
