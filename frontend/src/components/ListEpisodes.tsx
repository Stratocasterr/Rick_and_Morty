import React from 'react'
import Episode from './Episode'
import {useEpisodes} from '../hooks/useEpisodes'
import {ApolloError } from '@apollo/client';

interface Props
{
  data: any;
  error?: ApolloError | undefined;
  loading: boolean;
}
const ListEpisodes:React.FC = () => 
{
    const {error, loading, data }: Props= useEpisodes()
    if (loading) return <div>loading...</div>
    if(error) return <div>error</div>
    let episodes:any

    if(typeof data !== 'undefined')
    {
      episodes = data.episodes.results.map((episode:any, index:number) => 
      {
          return(
            <Episode
              key = {index}
              name ={episode.episode}
              date = {episode.air_date}
              title = {episode.name} 
              title_color = {index%2? '#c4dc28':'#08bcd4'}
            />)
      })
    }
    return (
      <div id='list-episodes-container'>
          {episodes}          
      </div>
    )
}
export default ListEpisodes
