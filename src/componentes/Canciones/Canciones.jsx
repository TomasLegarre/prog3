import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Canciones.css";

class Canciones extends Component{
  constructor(props){
      super(props)
      this.state={

          boton: false,
      }
  }
  verMas(){
    this.setState({ boton:true})
}
verMenos(){
    this.setState({ boton:false})
   
}


render(){console.log(this.props);
  const{datosCancion}=this.props 
   
  
  return(
    <React.Fragment>
  <div className="content-container cancion-container">
  
    <div className="cancion-info">
      <p className="cancion-text">
        {datosCancion.album.title}
        <br />
        {datosCancion.artist.name}
      </p>
      <img className="cancion-image" src={datosCancion.artist.picture_medium} alt="" />
    </div>
    {this.state.boton !== false ? (
      <section className="cancion-description">
        <p> Descripcion: {datosCancion.id}</p>
        <button className="boton-ver" onClick={() => this.verMenos()}>Ver menos</button>
      </section>
    ) : (
      <button className="boton-ver" onClick={() => this.verMas()}> Ver mas</button>
    )}
  </div>
</React.Fragment>


    )
  } 
}
 
export default Canciones;