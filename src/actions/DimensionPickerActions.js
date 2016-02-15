import fetch from 'isomorphic-fetch';

export const REQUEST_DIMENSION_ATTRIBUTES = "REQUEST_DIMENSION_ATTRIBUTES";
export const DIMENSION_ATTRIBUTES_RECEIVED_SUCCESS = "DIMENSION_ATTRIBUTES_RECEIVED_SUCCESS";
export const DIMENSION_ATTRIBUTES_RECEIVED_ERROR = "DIMENSION_ATTRIBUTES_RECEIVED_ERROR";
export const ATTRIBUTE_SELECTION_CHANGED = "ATTRIBUTE_SELECTION_CHANGED";

export function requestDimensionAttributes(dimensionName) {
	return {
		type: REQUEST_DIMENSION_ATTRIBUTES,
		pickerIsLoading: true
	}
}

export function receivedDimensionAttributesSuccess(data) {
	return {
		type: DIMENSION_ATTRIBUTES_RECEIVED_SUCCESS,
		attributeList: data,
		pickerIsLoading: false
	}
}
export function receivedDimensionAttributesError(error) {
	return {
		type: DIMENSION_ATTRIBUTES_RECEIVED_ERROR,
		pickerError: error,
		pickerIsLoading: false
	}
}

export function updateAttributeSelection(selected) {
	return {
		type: ATTRIBUTE_SELECTION_CHANGED,
		currentAttribute: selected
	}
}

export function fetchDimensionAttributes(dimensionName) {
  return function (dispatch) {
    dispatch(requestDimensionAttributes(dimensionName))
    return fetch(`https://movielen4.firebaseio.com/movieLens/${dimensionName}.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receivedDimensionAttributesSuccess(json))
      )
      .catch(error =>
    	dispatch(receivedDimensionAttributesError(error))
  	  );
  }
}