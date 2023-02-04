import { useQuery, gql, ApolloError } from '@apollo/client';
import { DocumentNode } from '@apollo/react-hooks';

let EPISODES:DocumentNode = gql`
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

interface Props
{
  data: string | undefined;
  error?: ApolloError | undefined;
  loading: boolean;
}
  
export const useEpisodes = () => {
  const {data, error, loading}:Props = useQuery(EPISODES)
  return{
      error,
      data,
      loading
  }
}