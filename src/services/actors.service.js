import apiClient from '../api/api-client';

export default async function getActorsFromServer(params) {

      return await apiClient.get(
         'api/character',
         params,
         (res) => {
            return res.results;
         },
         (error) => {
            console.log(error);
         });
}