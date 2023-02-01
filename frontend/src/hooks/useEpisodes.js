import React from 'react'
import { useQuery, gql } from '@apollo/client';
const G = gql`
query{
  episodes(filter:{episode:"S04"})
  {
    results
    {
      name,
      air_date,
      episode
    }
  }
}
`;
export const useEpisodes = () => {
    const {data, error, loading} = useQuery(G)
   
    
    return{
        error,
        data,
        loading
    }
}
