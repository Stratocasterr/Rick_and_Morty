import React from 'react'

const Episode = (props) => {
    const {name, date, title, title_color} = props
    
    return(
        <div className='episode'>
            <header> <b>{name}</b></header>
            <div className='title-date'>
                <header id='episode-title'>
                    <font color={title_color}><b>{title}</b></font>
                </header>
               
                <p id='episode-date'>{date}</p>
               
            </div>
        </div>)
  
}

export default Episode
