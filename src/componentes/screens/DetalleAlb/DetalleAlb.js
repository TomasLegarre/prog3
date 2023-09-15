import React, {Component} from 'react';
import DetalleCo from "../../DetalleCo/DetalleCo"
import DetalleAlbum from "../../DetalleAlbum/DetalleAlbum"

class DetalleAlb extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           album: []
        }
    }

    componentDidMount(){
             fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${this.state.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log (data)
                    this.setState(
                        { album: data }
  
                    )} )
                .catch(error => console.log('El error fue' + error))

    }
    

    render(){
        return(
            <React.Fragment >
         
           <DetalleAlbum datosAlbum={this.state.album} />
           </React.Fragment>
           
           
           

        )
    }

}

export default DetalleAlb;