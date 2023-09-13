import React, {Component} from 'react';
import "./DetalleCo.css"

class DetalleCo extends Component{
    constructor(props){
        super(props)
        this.state={
            
            
        }
    }
    

    render(){
      
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
                src={this.props.datosDetalle.link}
                width="80%"
                height="300"
                frameBorder="0"
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
              <span className="span2">  Añadir a mi Favoritos</span>
            </div>
  

          </div>
        </React.Fragment>



        
          
    )
}


}

export default DetalleCo;