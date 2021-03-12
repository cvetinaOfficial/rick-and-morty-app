import getEpisodesFromServer from '../services/episodes.service';
import actions from './action-types-episodes';

export function setEpisodes(episodes){
    return {type: actions.SET_EPISODES, payload: episodes};
}

export const getEpisodes = (params) => async function(dispatch){
    try {
        const response = await getEpisodesFromServer(params);
        dispatch(setEpisodes(response.results));
    } catch (error) {
        console.log(error)
    }
}

export function setSelectedEpisode(episode){
    return {type: actions.SET_SELECTED_EPISODE, payload: episode};
}