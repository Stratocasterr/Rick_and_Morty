import React from 'react'

const HeaderImage = () => {
  return (
    <div id='header-image'>
        <div 
            id ='content-header'>
            <p>
                Episodes of the <b>4th</b> 
                <br></br>
                season of series
                <br></br>
                <font color='blue'><b>Rick and Morty</b></font>
            </p>
            
        </div>

        <img 
            alt='write_mess' 
            id='rick-morty-image'
            src={require("../images/rick_morty.png")} 
        />
    </div>
  )
}

export default HeaderImage
