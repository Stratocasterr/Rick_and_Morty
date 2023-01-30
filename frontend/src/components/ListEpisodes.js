import React from 'react'
import Episode from './Episode'

const ListEpisodes = () => {

    

    let episodes = []
    
    
    return (
      <div id='list-episodes-content'>
          {episodes.map(episode => {
            return(
              <>
                <Episode 
                  episode = {episode}
                />
                <br></br>
              </>
              
              )
          }
        )}
      </div>
    )
}

export default ListEpisodes
