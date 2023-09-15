import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Artistas from '../../Artistas/Artistas';
import Canciones from "../../Canciones/Canciones"



class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
                canciones: [],  
        }
    }
    componentDidMount() {
        let listaLocalStorage = JSON.parse(localStorage.getItem('favoritos'))
        if (listaLocalStorage != null){
            listaLocalStorage.map((id)=>{
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                .then(response=>response.json())
            .then(data=> {
                let arrayEstado=this.state.canciones
                arrayEstado.push(data)
                this.setState({canciones:arrayEstado})
            })
            .catch(error=>console.log('El error fue: ' + error))
        })
            }
        }

    render() {
        return(

            <React.Fragment>
            
          
            {/* Prueba de cargando */}
            {this.state.canciones.length === 0 ? <h3 className="Titulo">Cargando ...</h3> : ''}
            
              <main>
                <article className="lists">
                  <section className="list-container">
                    <h2 className="h2-list"> Favoritos</h2>
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

        
        



export default Favoritos;