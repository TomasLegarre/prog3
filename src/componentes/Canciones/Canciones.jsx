import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Canciones.css";

class Canciones extends Component{
  constructor(props){
      super(props)
      this.state={
          textoFavs: "agregar a favoritos",

          boton: false,
      }
  }
  componentDidMount(){
    let listaLocalStorage = JSON.parse(localStorage.getItem('favoritos'))
    if (listaLocalStorage != null){
      if (listaLocalStorage.includes(this.props.datosCancion.id)){
        this.setState({textoFavs:"Eliminar a favoritos"})

      } else{
        this.setState({textoFavs:"Agregar a favoritos"})
      }
   }


  }
  verMas(){
    this.setState({ boton:true})
}
verMenos(){
    this.setState({ boton:false})
   
}
Agregarfavs(){
  let listaLocalStorage = JSON.parse(localStorage.getItem('favoritos')) //creamos variable que es igual al local storage con la clave favoritos transformado en array.
  let Arrayfavoritos=[]
  if (listaLocalStorage != null){
     Arrayfavoritos=listaLocalStorage
  }
  if (Arrayfavoritos.includes(this.props.datosCancion.id)){
    this.setState({textoFavs:"Agregar a favoritos"})
    Arrayfavoritos = Arrayfavoritos.filter( (elm) => {
      return elm !== this.props.datosCancion.id;
  });

  } else{
    this.setState({textoFavs:"Eliminar a favoritos"})
    Arrayfavoritos.push(this.props.datosCancion.id)
  }
localStorage.setItem('favoritos',JSON.stringify(Arrayfavoritos));

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
      <Link to = {`/detalle/id/${datosCancion.id}`}>
      <img className="cancion-image" src={datosCancion.artist.picture_medium} alt="" />
      </Link>
      
    </div>
    {this.state.boton !== false ? (
      <section className="cancion-description">
        <p> Descripcion: el titulo de esta cancion es {datosCancion.album.title} y es del artista {datosCancion.artist.name} </p>
        <button className="boton-ver" onClick={() => this.verMenos()}>Ver menos</button>
      </section>
    ) : (
      <button className="boton-ver" onClick={() => this.verMas()}> Ver mas</button>
    )}
    <button onClick={() => this.Agregarfavs()}> {this.state.textoFavs} </button>
  </div>
</React.Fragment>


    )
  } 
}
 
export default Canciones;