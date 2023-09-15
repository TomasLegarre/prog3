import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Canciones from '../../Canciones/Canciones';



class VerTodas extends Component {
    constructor(props) {
        super(props)
        this.state = {
                canciones: [], 
                limite: 10, 
        }
    }
    componentDidMount() {
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.limite}`)
                .then(response=>response.json())
            .then(data=> {
              this.setState({canciones:data.data})
            })
            .catch(error=>console.log('El error fue: ' + error))
        }
        actualizarLimite(){
          let limite = this.state.limite
          limite += 10
          this.setState({limite: limite})
        }
        componentDidUpdate(){
          fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.limite}`)
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
                    <h2 className="h2-list">Todas las canciones</h2>
                    <button onClick={() =>  this.actualizarLimite()} >  Visualizar mas canciones</button>
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

        
        



export default VerTodas;