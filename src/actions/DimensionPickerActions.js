import fetch from 'isomorphic-fetch';

export const REQUEST_DIMENSION_ATTRIBUTES = "REQUEST_DIMENSION_ATTRIBUTES";
export const DIMENSION_ATTRIBUTES_RECEIVED = "DIMENSION_ATTRIBUTES_RECEIVED";
export const ATTRIBUTE_SELECTION_CHANGED = "ATTRIBUTE_SELECTION_CHANGED";
export const SET_DIMENSION_NAME = "SET_DIMENSION_NAME";

export function requestDimensionAttributes(dimensionName) {
	return {
		type: REQUEST_DIMENSION_ATTRIBUTES
	}
}

export function receivedDimensionAttributes(data, error) {
	return {
		type: DIMENSION_ATTRIBUTES_RECEIVED,
		data: data,
		error: error
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
        dispatch(receivedDimensionAttributes(json, null))
      )
      .catch(error =>
      	console.log(error)
    	dispatch(receivedDimensionAttributes(null, error))
  	  );
  }
}