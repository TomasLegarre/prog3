import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Artistas from '../../Artistas/Artistas';
import Canciones from "../../Canciones/Canciones"
import "./Home.css"



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
                canciones: [],
                artistas: [],
                valor: '',
                search: undefined
        }
    }
    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=5')
            .then(response => response.json())
            .then(data => {this.setState(
                { canciones: data.data }

            )} )
            .catch(error => console.log('El error fue' + error))


            fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/artist&top?limit=5')
            .then(response => response.json())
            .then(data => {
                console.log (data)
                this.setState(
                { artistas: data.artists.data }
  
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
                        <article className="lists">
                            <section className="list-container">
                                <h2 className="h2-list">5 Top Tracks</h2>
                                <Link to="/" className="boton-todo"> Ver todas las canciones populares</Link>
                            <section className="content-container list-text sub-list sub-list-artist sub-list-button list-text">
                                    {this.state.canciones.map((unaCancion, idx) => <Canciones key= {unaCancion + idx} datosCancion={unaCancion} />)}
                                </section>  
                                <ul className="list list-artist"></ul>
                            </section>


                            <section className="list-container">
                                <h2 className="h2-list">Artistas</h2>
                                <Link to="/" className="boton-todo"> Ver todos los artistas populares </Link>
                                <section className="card-container">
                                    {this.state.artistas.map((unArtista, idx) => <Artistas key= {unArtista + idx} datosArtistas={unArtista} />)}
                                </section>
                                <ul className="list list-artist"></ul>
                                </section> 
                             </article>
                    </main>



                </React.Fragment>
            )
        }
  }

        
        



export default Home;