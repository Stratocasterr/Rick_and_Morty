import React from 'react'

const HeaderImage:React.FC = () => {
  return (
    <div id='header-image'>
        <div 
            id ='content-header'>
            <p>
                Episodes of the <b>4th</b> 
                <br></br>
                season of the series
                <br></br>
                <span
                  id = 'r-m-bold' 
                  style={{color:`#08bcd4`}}>
                  <b>Rick and Morty</b>
                </span>
            </p>  
        </div>

        <img 
            alt='rick-morty-img' 
            id='rick-morty-image'
            src={require("../images/rick_morty.png")} 
        />
    </div>
  )
}

export default HeaderImage
