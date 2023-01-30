import React from 'react'

const Episode = (props) => {
    const {episode} = props
    return(
        <div className='episode'>
            <header> <b>{episode.epi}</b></header>
            <div className='title-date'>
                <header><font color='blue'><b>{episode.title}</b></font></header>
                <p>{episode.date}</p>
            </div>
        </div>)
  
}

export default Episode
