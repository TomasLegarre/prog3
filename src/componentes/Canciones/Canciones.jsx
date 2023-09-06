import React from "react"

function Canciones (props){
    console.log(props)
    return(
        <React.Fragment>
            <div className="slide">
                <p>
                {props.datosCancion.album.title}
                <br />
                {props.datosCancion.artist.name}
                </p> 
                
            </div>
            
            

         </React.Fragment>
        
        
    
        
    )
}

export default Canciones