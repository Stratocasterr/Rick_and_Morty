import React from 'react'

interface Props {
    name: string,
    date: string,
    title:string,
    title_color:string
  }

const Episode = (props:Props) => {
    const {name, date, title, title_color}:Props = props
    
    return(
        <div className='episode'>
            <header> <b>{name}</b></header>
            <div className='title-date'>
                <header id='episode-title'>
                    <div 
                        style={{color:`${title_color}`}}><b>{title}</b>
                    </div>
                </header>        
                <p id='episode-date'>{date}</p>         
            </div>
        </div>)
}

export default Episode
