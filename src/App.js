//import './App.css';
import React from "react"
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Home from "./componentes/screens/Home/Home";
import Generos from "./componentes/screens/Generos/Generos"
import Favoritos from "./componentes/screens/Favoritos/Favoritos"
import NotFound from "./componentes/NotFound/NotFound"
import { Route, Switch } from 'react-router-dom';
import Detalle from "./componentes/Detalle/Detalle"



function App() {

  return (
    <React.Fragment>
      <Header/>
    
          <Switch> 

            <Route path="/" exact= {true} component= {Home} />
            <Route path="/generos" component= {Generos} />
            <Route path="/favoritos" component= {Favoritos} />
            {/* <Route path="/detalle/id/:id" component= {Detalle} /> */}


            <Route component= {NotFound} />
            
          </Switch> 

      <Footer />
    </React.Fragment>
    
     
  
   
  );
}

export default App;
