const initialState = {
    DimensionPicker: {
        dimenisionName: '',
        pickerIsLoading: false,
        pickerError: '',
        currentAttribute: '',
        attributeList: []
    },
    DataTable: {
        tableIsLoading: false,
        tableData: [],
        tableError: ''
    }    
}

export default initialState;
