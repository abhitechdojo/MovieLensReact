import React from 'react';
import AppConstants from '../actions/AppConstants.js';
import objectAssign from 'react/lib/Object.assign';
import MovieLensAppDispatcher from '../dispatchers/MovieLensAppDispatcher.js';
var EventEmitter = require('events').EventEmitter;

var OCCUPATION_CHANGE_EVENT = "occupationChange";
var GENRE_CHANGE_EVENT = "genreChange";
var GENDER_CHANGE_EVENT = "genderChange";

var _store = {
	occupationList: [{id: 0, val: 'All'}, {id: 1, val: 'Engineer'}, {id: 2, val: 'Doctor'}, {id: 3, val: 'Scientist'}],
	currentOccupation: 'All',
	genderList : [{id: 0, val: 'All'}, {id: 1, val: 'M'}, {id: 2, val: 'F'}],
	currentGender: 'All',
	genreList : [{id: 0, val: 'All'}, {id: 1, val: 'Comedy'}, {id: 2, val: 'Action'}],
	currentGenre: 'All',
	movieList: []
}

var setCurrentOccupation = function(newValue) {
	_store.currentOccupation = newValue;
}

var setCurrentGender = function(newValue) {
	_store.currentGender = newValue;
}

var setCurrentGenre = function(newValue) {
	_store.currentGenre = newValue;
}

var setMovieList = function(newValue) {
	_store.movieList = newValue;
}

var MovieLensAppStore = objectAssign({}, EventEmitter.prototype, {
		addOccupationListener(cb) {
			this.on(OCCUPATION_CHANGE_EVENT, cb);
		},
		removeOccupationListener(cb) {
			this.removeListener(OCCUPATION_CHANGE_EVENT, cb);
		},
		addGenreListener(cb) {
			this.on(GENRE_CHANGE_EVENT, cb);
		},
		removeGenreListener(cb) {
			this.removeListener(GENRE_CHANGE_EVENT, cb);
		},
		addGenderListener(cb) {
			this.on(GENDER_CHANGE_EVENT, cb);
		},
		removeGenderListener(cb) {
			this.removeListener(GENDER_CHANGE_EVENT, cb);
		},
		getAttributes(dimensionName) {
			switch(dimensionName) {
				case "occupation": return _store.occupationList;
					break;
				case "gender": return _store.genderList;
					break;
				case "genre": return _store.genreList;
					break;
				default: 
					return [];
			}
		},
		getCurrentAttribute(dimensionName) {
			switch(dimensionName) {
				case "occupation": return _store.currentOccupation;
					break;
				case "gender": return _store.currentGender;
					break;
				case "genre": return _store.currentGenre;
					break;
				default: 
					return "";
			}
		}
	}
);

MovieLensAppDispatcher.register((payload)=>{
	var action = payload.action;
	switch(action.actionType) {
		case AppConstants.OCCUPATION_CHANGE: 
			setCurrentOccupation(action.data);
			MovieLensAppStore.emit(OCCUPATION_CHANGE_EVENT);
			break;
		case AppConstants.GENDER_CHANGE:
			setCurrentGender(action.data);
			MovieLensAppStore.emit(GENDER_CHANGE_EVENT);
			break;
		case AppConstants.GENRE_CHANGE:
			setCurrentGenre(action.data);
			MovieLensAppStore.emit(GENRE_CHANGE_EVENT);
			break;
		default: 
			return true;
	}
});


export default MovieLensAppStore;
