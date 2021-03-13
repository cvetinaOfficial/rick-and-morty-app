import actions from './action-types-actors';
import getActorsFromServer from '../services/actors.service';

// global set state function
export function setActors(actors){
    return {type: actions.SET_ACTORS, payload: actors};
}

export const getActors = (params) => async function(dispatch){
    try {
        const response = await getActorsFromServer(params);
        dispatch(setActors(response.results));
    } catch (error) {
        console.log(error)
    }
}

export function setSelectedGender(gender){
    return {type: actions.SET_SELECTED_GENDER, payload: gender};
}

export function setSelectedStatus(status){
    return {type: actions.SET_SELECTED_STATUS, payload: status};
}

export function setListView(value){
    return {type: actions.SET_LIST_VIEW, payload: value};
}