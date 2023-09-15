//import './App.css';
import React from "react"
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Home from "./componentes/screens/Home/Home";
import VerTodas from "./componentes/screens/VerTodas/VerTodas";
import Favoritos from "./componentes/screens/Favoritos/Favoritos"
import NotFound from "./componentes/NotFound/NotFound"
import { Route, Switch } from 'react-router-dom';
import Detalle from "./componentes/screens/Detalle/Detalle"; 
import ResultadoBusqueda from "./componentes/ResultadoBuscqueda/ResultadoBusqueda";
import DetalleAlb from "./componentes/screens/DetalleAlb/DetalleAlb";





function App() {

  return (
    <React.Fragment>
      <Header/>
    
          <Switch> 

            <Route path="/" exact= {true} component= {Home} />
            <Route path="/generos" component= {VerTodas} />
            <Route path="/favoritos" component= {Favoritos} />
            <Route path="/detalle/id/:id" component= {Detalle} />
            <Route path="/ResultadoBusqueda/:busqueda" component= {ResultadoBusqueda} />
            <Route path='/detalleAlbum/id/:id' component={DetalleAlb}/>



            <Route component= {NotFound} />
            
          </Switch> 

      <Footer />
    </React.Fragment>
    
     
  
   
  );
}

export default App;
