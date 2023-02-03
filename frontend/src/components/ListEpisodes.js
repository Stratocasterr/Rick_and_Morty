import React from 'react'
import Episode from './Episode'
import {useEpisodes} from '../hooks/useEpisodes'
const ListEpisodes = () => 
{
    const {error, loading, data }= useEpisodes()
    if (loading) return <div>loading...</div>
    if(error) return <div>error</div>

    let episodes = data.episodes.results.map((episode, index) => 
      {
          return(
            <Episode
              name ={episode.episode}
              date = {episode.air_date}
              title = {episode.name} 
              title_color = {index%2? '#c4dc28':'#08bcd4'}
            />)
      })
     
    return (
      <div id='list-episodes-container'>
          {episodes}          
      </div>
    )
}

export default ListEpisodes
