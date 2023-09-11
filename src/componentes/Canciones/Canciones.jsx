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
              <br />
              {/* dentro del src ponemos la ruta, que la trajimos de la api en fomrato string */}
              <img src={props.datosCancion.artist.picture_medium} alt="" />   
              </p> 

          </div>

       </React.Fragment>
    )
  } 
export default Canciones;