import actorsActions from './action-types-actors';
import episodesActions from './action-types-episodes';
import { combineReducers } from 'redux';

// global state
function actors(state = [], action){
    switch(action.type){
        case actorsActions.SET_ACTORS: {
            return [...action.payload];
        }
        default: 
            return state;
    }
}

function episodes(state = [], action){
    switch(action.type){
        case episodesActions.SET_EPISODES: {
            return action.payload;
        }
        default: 
            return state;
    }
}

function selectedFilters(state = {
    selectedGender: 'female',
    selectedStatus: 'alive',
    selectedEpisode: '',
}, action) {
    switch(action.type) {
        case actorsActions.SET_SELECTED_GENDER: {
            return {
                ...state, 
                ...{
                    selectedGender: action.payload,
                }
            }
        }
        case actorsActions.SET_SELECTED_STATUS: {
            return {
                ...state,
                ...{
                    selectedStatus: action.payload,
                }
            }
        }
        case episodesActions.SET_SELECTED_EPISODE: {
            return {
                ...state,
                ...{
                    selectedEpisode: action.payload,
                }
            }
        }
        default: 
            return state;
    }
}

export default combineReducers({actors, selectedFilters, episodes});