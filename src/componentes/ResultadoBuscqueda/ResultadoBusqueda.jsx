import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Canciones from '../Canciones/Canciones';



class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state = {
                canciones: [],  
        }
    }
    componentDidMount() {
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.props.match.params.busqueda}`)
            .then(response=>response.json())
            .then(data=> {
              this.setState({canciones:data.data})
            })
            .catch(error=>console.log('El error fue: ' + error))
        }

    render() {
        return(

            <React.Fragment>
            
          
            {/* Prueba de cargando */}
            {this.state.canciones.length === 0 ? <h3 className="Titulo">Cargando ...</h3> : ''}
            
              <main>
                <article className="lists">
                  <section className="list-container">
                    <h2 className="h2-list">RESULTADO DE BUSQUEDA</h2>
                    <ul className="list-artist">
                      {this.state.canciones.map((unaCancion, idx) => (
                        <li key={unaCancion + idx} className="sub-list">
                          <Canciones datosCancion={unaCancion} />
                        </li>
                      ))}
                    </ul>
                  </section>
                </article>
                </main>
                
            </React.Fragment>
            
            );
          }       
  }

        
        



export default ResultadoBusqueda;