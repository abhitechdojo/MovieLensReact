const initialState = {
    DimensionPicker: {
        dimenisionName: '',
        isLoading: false,
        error: '',
        currentAttribute: '',
        attributeList: []
    },
    DataTable: {
        isLoading: false,
        data: [],
        error: '',
        keys: [],
        columns: [],
        sortBy: {}
    }    
}

export default initialState;
