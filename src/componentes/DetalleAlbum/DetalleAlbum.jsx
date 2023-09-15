import React, {Component} from 'react';
import "./DetalleAlbum.css"

class DetalleAlbum extends Component{
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
        if (listaLocalStorage.includes(this.props.datosAlbum.id)){
          this.setState({textoFavs:"Eliminar a favoritos"})
  
        } else{
          this.setState({textoFavs:"Agregar a favoritos"})
        }
     }

    }

    Agregarfavs(){
      let listaLocalStorage = JSON.parse(localStorage.getItem('favoritos')) //creamos variable que es igual al local storage con la clave favoritos transformado en array.
      let Arrayfavoritos=[]
      if (listaLocalStorage != null){
         Arrayfavoritos=listaLocalStorage
      }
      if (Arrayfavoritos.includes(this.props.datosAlbum.id)){
        this.setState({textoFavs:"Agregar a favoritos"})
        Arrayfavoritos = Arrayfavoritos.filter( (elm) => {
          return elm !== this.props.datosAlbum.id;
      });
    
      } else{
        this.setState({textoFavs:"Eliminar a favoritos"})
        Arrayfavoritos.push(this.props.datosAlbum.id)
      }
    localStorage.setItem('favoritos',JSON.stringify(Arrayfavoritos));
    
    }
    
    render(){
      console.log(this.props);
        return(
          <React.Fragment>
            
             <img className="imgTrack" src={this.props.datosAlbum.cover_xl} alt="img"/>
            <div className="texto">
            <h3 className="span1">Album</h3>
          
            <h1 className="albumName">{this.props.datosAlbum.label}</h1>
  

            <audio src={this.props.datosAlbum.cover_medium}></audio>

            <h3 className="span1">Acerca del álbum</h3>
            <div className="div1">
            <span className="span1">Título: </span><span className="desc">{this.props.datosAlbum.title}</span>
            </div>

            <div className="div2">
              <span className="span1"> Fecha de lanzamiento: </span> <span className="desc"> {this.props.datosAlbum.release_date}</span>
            </div>

            <div className="div4">
              <button className="span2" onClick={() => this.Agregarfavs()}> {this.state.textoFavs} </button>
             
            </div> 
           </div> 
            

  

            
        </React.Fragment> 



  
          
    )
}


}

export default DetalleAlbum;