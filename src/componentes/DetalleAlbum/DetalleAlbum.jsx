import React, {Component} from 'react';


class DetalleAlbum extends Component{
    constructor(props){
        super(props)
        this.state={
            
            
        }
    }
    

    render(){
       
        return(
          <React.Fragment>
           
            <div className="texto">
            <h3 className="span1">Canción</h3>
         
            <h1 className="albumName">{this.props.datosAlbum.title}</h1>

  

          
  

          </div>
        </React.Fragment>



        
          
    )
}


}

export default DetalleAlbum;