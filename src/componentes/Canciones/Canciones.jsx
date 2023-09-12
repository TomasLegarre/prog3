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
          <div className="content-container">
            
 
              <p>
              {datosCancion.album.title}
              <br />
              {datosCancion.artist.name}
              <br />
              {/* dentro del src ponemos la ruta, que la trajimos de la api en fomrato string */}
              <img src={datosCancion.artist.picture_medium} alt="" />   
              </p> 

               {this.state.boton !== false?
                        <section>
                        <button className="boton-ver" onClick={()=>this.verMenos()} >Ver menos</button>
                        <p> Descripcion: {datosCancion.id}</p>
                        </section>
                        : 
                      <button className="boton-ver" onClick= {()=> this.verMas()}> Ver mas</button>
               }       
               
               {/* {datosCancion.artist.id} */}



          </div>

       </React.Fragment>
    )
  } 
}
 
export default Canciones;