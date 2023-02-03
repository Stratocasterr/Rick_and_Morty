import { useQuery, gql } from '@apollo/client';
const EPISODES = gql`
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
    const {data, error, loading} = useQuery(EPISODES)
    return{
        error,
        data,
        loading
    }
}
