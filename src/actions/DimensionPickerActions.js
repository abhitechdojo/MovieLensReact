import fetch from 'isomorphic-fetch';

export const REQUEST_DIMENSION_ATTRIBUTES = "REQUEST_DIMENSION_ATTRIBUTES";
export const DIMENSION_ATTRIBUTES_RECEIVE_SUCCESS = "DIMENSION_ATTRIBUTES_RECEIVE_SUCCESS";
export const DIMENSION_ATTRIBUTES_RECEIVE_ERROR = "DIMENSION_ATTRIBUTES_RECEIVE_ERROR";
export const ATTRIBUTE_SELECTION_CHANGED = "ATTRIBUTE_SELECTION_CHANGED";
export const SET_DIMENSION_NAME = "SET_DIMENSION_NAME";

export function requestDimensionAttributes(dimensionName) {
	return {
		type: REQUEST_DIMENSION_ATTRIBUTES,
		isLoading: true
	}
}

export function receivedDimensionAttributesSuccess(data) {
	return {
		type: DIMENSION_ATTRIBUTES_RECEIVE_SUCCESS,
		data: data,
		isLoading: false
	}
}
export function receivedDimensionAttributesError(error) {
	return {
		type: DIMENSION_ATTRIBUTES_RECEIVE_ERROR,
		error: error,
		isLoading: true
	}
}

export function updateAttributeSelection(selected) {
	return {
		type: ATTRIBUTE_SELECTION_CHANGED,
		data: selected
	}
}

export function setDimensionName(dimensionName) {
	return {
		type: SET_DIMENSION_NAME,
		data: dimensionName
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