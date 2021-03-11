import apiClient from '../api/api-client';

export default async function getActors() {

      return await apiClient.get(
         'api/character',
          {},
         (res) => {
            return res.results;
         },
         (error) => {
            console.log(error);
         });
}