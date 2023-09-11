import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
                generos: [],
                favoritos: [],
                valor: '',
        }
    }

        evitarSubmit(evento){
            evento.preventDefault();
        }

        controlarCambios(evento) {
            this.setState({valor: evento.target.value}); // aca tenemos el valor de la busqueda guardado. 
        }

        render() {
            console.log(this.state)

            return(
                <React.Fragment>
    
                    <h2>Home</h2>
        
                    <form className="search" onSubmit={(evento) => this.evitarSubmit(evento)} >
                            <label>Busqueda:</label>
                            <input type="text" onChange={(evento)=>this.controlarCambios(evento)} value={this.state.valor}/>
                            <input type="submit" value="Submit"/>
                    </form>
                    
                   
               
        
                </React.Fragment>
            )
        }

    
    

}

export default Home;