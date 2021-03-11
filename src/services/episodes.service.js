import apiClient from '../api/api-client';

export default async function getEpisodes() {

       return await apiClient.get(
            'api/episode',
            {},
            (res) => {
                return res.results;
            },
            (error) => {
                console.log(error);
            });
}