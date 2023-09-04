import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Canciones from "../../Canciones/Canciones"



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
                canciones: [],
                favoritos: [],
                valor: '',
                search: undefined
        }
    }

    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=5')
            .then(response => response.json())
            .then(data => {this.setState(
                { canciones: data.data },
                console.log (data)
            )} )
            .catch(error => console.log('El error fue' + error))
    }


        evitarSubmit(evento){
            evento.preventDefault();
        }

        controlarCambios(evento) {
            this.setState({valor: evento.target.value});
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

                    {/* Prueba de cargando */}
                    {this.state.canciones.length === 0 ?
                 <h3 className="Titulo"> Cargando ... </h3> : ''}

                    <main>

                        <div>
                            <h2 className="Titulo"> 5 Tops tracks</h2>
                            <Link to="/" className="boton-todo"> Ver todas las canciones populares</Link>
                        </div>
                        <section className="card-container">
                            {this.state.canciones.map((unaCancion, idx) => <Canciones key= {unaCancion + idx} datosCancion={unaCancion} />)}
                        </section>

                        {/* ARMANDO EL DE ARTISTAS, creo que falta el fetch y guardar en array <div>
                            <h2 className="Artista"> 5 Tops artistas</h2>
                            <Link to="/" className="boton-todo"> Ver todas los artistas populares</Link>
                        </div>
                        <section className="card-container">
                            {this.state.artistas.map((unaCancion, idx) => <Canciones key= {unaCancion + idx} datosCancion={unaCancion} />)}
                        </section> */}

                    
          
                    </main>
                   
               
        
                </React.Fragment>
            )
        }

    
    

}

export default Home;