import React from "react"

function Canciones (props){
    console.log(props)
    return(
        <div className="slide">
            <p>
            {props.datosCancion.album.title}
            <br />
            {props.datosCancion.artist.name}
            </p> 
        </div>
        
        
    
        
    )
}

export default Canciones