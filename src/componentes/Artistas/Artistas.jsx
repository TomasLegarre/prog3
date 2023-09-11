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
          <div className="slide">
              <p>
               {datosArtistas.name}
               <br />
              <img src={datosArtistas.picture_medium} alt="" />    
              </p> 
              {this.state.boton !== false?
                        <section>
                        <button className="boton-ver" onClick={()=>this.verMenos()} >Ver menos</button>
                        <p> Descripcion: {datosArtistas.id}</p>
                        </section>
                        : 
                        <button className="boton-ver" onClick= {()=> this.verMas()}> Ver mas</button>
               }        

          </div>

       </React.Fragment>
    )
  } 
}
  
  
export default Artistas;