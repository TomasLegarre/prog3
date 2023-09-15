import React, {Component} from 'react';
import "./DetalleCo.css"

class DetalleCo extends Component{
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
        if (listaLocalStorage.includes(this.props.datosDetalle.id)){
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
      if (Arrayfavoritos.includes(this.props.datosDetalle.id)){
        this.setState({textoFavs:"Agregar a favoritos"})
        Arrayfavoritos = Arrayfavoritos.filter( (elm) => {
          return elm !== this.props.datosDetalle.id;
      });
    
      } else{
        this.setState({textoFavs:"Eliminar a favoritos"})
        Arrayfavoritos.push(this.props.datosDetalle.id)
      }
    localStorage.setItem('favoritos',JSON.stringify(Arrayfavoritos));
    
    }
    
    render(){
      console.log(this.props.datosDetalle);
        return(
          <React.Fragment>
            <img className="imgTrack" src={this.props.datosDetalle.album.cover_xl} alt="img"/>
            <div className="texto">
            <h3 className="span1">Canción</h3>
         
            <span>{this.props.datosDetalle.track_position}</span>
            <h1 className="albumName">{this.props.datosDetalle.artist.name}</h1>
  

            <span className="triangulo">
              <iframe
                title="deezer-widget"
                src= {`https://widget.deezer.com/widget/dark/track/${this.props.datosDetalle.id}`}
                width="80%"
                height="300"
                allowtransparency="true"
                allow="encrypted-media; clipboard-write"
              ></iframe>
            </span>
            <audio src={this.props.datosDetalle.album.cover_medium}></audio>

            <h3 className="span1">Acerca del álbum</h3>
            <div className="div1">
            <span className="span1">Título: </span><span className="desc">{this.props.datosDetalle.title}</span>
            </div>

            <div className="div1">
              <span className="span1">Artistas: </span><span className="desc"> {this.props.datosDetalle.artist.name}</span>
            </div>

            <div className="div2">
              <span className="span1"> Fecha de lanzamiento: </span> <span className="desc"> {this.props.datosDetalle.release_date}</span>
            </div>

            <div className="div4">
              <button className="span2" onClick={() => this.Agregarfavs()}> {this.state.textoFavs} </button>
             
            </div>
            
  

          </div>
        </React.Fragment> 



        
          
    )
}


}

export default DetalleCo;