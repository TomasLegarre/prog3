import React, {Component} from 'react';

class DetalleCo extends Component{
    constructor(props){
        super(props)
        this.state={
            
            
        }
    }
    

    render(){
      
        return(
           <article className= "div1">
               {/* <h1 className= "titulo1">Titulo: {this.props.datosDetalle.title}</h1>
                <img className="imagen-detalle" src={this.props.datosDetalle.album.cover_medium} alt='img'/> */}
             <section className="info-detalle">  
             {/* <h3 class="span1">Acerca del álbum</h3>

               <h1 className= "titulo2"> Artista: {this.props.datosDetalle.artist.name}</h1>
               <h1 className= "titulo2"> Disco: </h1>
               <h1 className= "titulo2"> Fecha lanzamiento: </h1>
               <h3 class="span1">Canción</h3> */}
             {/* <span>${datosDetalle.track_position}. ${datosDetalle.title} ${time()}</span>  */}

             <span class="triangulo"><iframe title="deezer-widget" src={this.props.datosDetalle.link} width="80%"height="300"
            frameborder="0"allowtransparency="true"allow="encrypted-media;
            clipboard-write"></iframe></span>
            <audio src={this.props.datosDetalle.album.cover_medium}></audio>

            {/* <h3 class="span1">Acerca del álbum</h3>

            <div class="div1">
            <span class="span1">Título: </span><span class="desc"><a href="detail-album.html?id=${data.album.id}">${data.album.title}</a></span>
            </div>

            <div class="div1">
              <span class="span1">Artistas: </span><span class="desc"><a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a></span>
            </div>
            
             Fecha de lanzamiento: </span> <span class="desc"> ${dataAlbum.release_date}</span> */}
            

                </section>
           </article>


)
}


}

export default DetalleCo;