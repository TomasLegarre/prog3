import React, {Component} from 'react';
import DetalleCo from "../../DetalleCo/DetalleCo"

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           canciones: []
        }
        console.log(this.state.id)
    }

    componentDidMount(){
        let cancionesPa = []
        let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${this.state.id}`
        fetch(url)
            .then(response => response.json())
            .then(data => cancionesPa.push(data))
            .then(() => this.setState(
                {
                    canciones: cancionesPa }
                    
            ))
            .catch(error => console.log('El error es' + error))
            console.log(this.state.canciones)
    }
    

    render(){
        console.log(this.state.canciones)
        return(
            <React.Fragment >
           {this.state.canciones.map((unDetalle, idx) => <DetalleCo key={unDetalle + idx} datosDetalle={unDetalle} />)}
           </React.Fragment>

        )
    }

}

export default Detalle