import React, { Component } from 'react';
import {Link} from 'react-router-dom';



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
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
            .then(response => response.json())
            .then(data => this.setState(
                { canciones: data.results }
            ))
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
                    <main>
                    <div>
                            <h2 className="Titulo"> 10 Tops tracks</h2>
                            <Link to="/populares" className="boton-todo"> Ver todas las peliculas populares</Link>
                        </div>
                        <section className="card-container">
                            {this.state.populares.map((unaPeli, idx) => <PeliculasCard key={unaPeli + idx} datosPeli={unaPeli} />)}
                        </section>

                        <div></div>
          
    </main>
                   
               
        
                </React.Fragment>
            )
        }

    
    

}

export default Home;