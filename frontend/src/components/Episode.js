import React from 'react'

const Episode = (props) => {
    const {name, date, title, title_color} = props
    console.log("props: ",props)
    return(
        <div className='episode'>
            <header> <b>{name}</b></header>
            <div className='title-date'>
                <header><font color={title_color}><b>{title}</b></font></header>
                <p>{date}</p>
            </div>
        </div>)
  
}

export default Episode
