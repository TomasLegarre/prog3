import React from "react"


function Artistas (props){
  console.log(props)
  return(
      <React.Fragment>
          <div className="slide">
              <p>
              {props.datosArtistas.name}
               <br />
              <img src={props.datosArtistas.picture_medium} alt="" />    
              </p> 

          </div>

       </React.Fragment>
    )
  } 
export default Artistas;