//import './App.css';
import React from "react"
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Home from "./componentes/screens/Home/Home";
import Generos from "./componentes/screens/Generos/Generos"
import Favoritos from "./componentes/screens/Favoritos/Favoritos"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



function App() {

  return (
    <React.Fragment>
      <Header/>
      <main>
          <Switch> 
            <Route path="/" exact= {true} component= {Home}/>
            <Route path="/generos" component= {Generos}/>
            <Route path="/favoritos" component= {Favoritos}/>

          </Switch> 
      </main>  
      
      <Footer />
    </React.Fragment>
    
     
  
   
  );
}

export default App;
