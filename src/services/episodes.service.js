import apiClient from '../api/api-client';

export default async function getEpisodesFromServer(params) {

       return await apiClient.get(
            'api/episode',
            params,
            (res) => {
                return res.results;
            },
            (error) => {
                console.log(error);
            });
}