import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Artistas extends Component{
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

render(){
  const{datosArtistas}=this.props 
  return(
    <React.Fragment>
    <div className="content-container cancion-container">
      
      <div className="cancion-info">
        <p className="cancion-text">
          {datosArtistas.name}
          <br />
          <img className="cancion-image" src={datosArtistas.picture_medium} alt="" />
        </p>
      </div>
      {this.state.boton !== false ? (
        <section className="cancion-description">
          <p> Descripcion: {datosArtistas.id}</p>
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
  
  
export default Artistas;