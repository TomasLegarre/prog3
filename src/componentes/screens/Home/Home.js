import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Canciones from "../../Canciones/Canciones"
import "./Home.css"




class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            popular: [],
            backup: [],
            page: 1,
            upcoming: [],
            backupUp: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular')
        .then (resp => resp.json())
        .then(data => this.setState({
            popular: data.results.slice(0,5),
            backup: data.results.slice(0,5)
        }))
        .catch(err => console.log(err))

        fetch('https://api.themoviedb.org/3/movie/upcoming')
        .then(resp => resp.json())
        .then(data => this.setState({
            upcoming: data.results.slice(0,5),
            backupUp: data.results.slice(0,5)
        }))
        .catch(err => console.log(err))

    }
    
    filtrarPeliculas(nombre){
        let peliculasFiltrados = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
        this.setState({
            popular: peliculasFiltrados , 
            upcoming: peliculasFiltrados
        })
    }
    




  render() {
    return (
      <>
        <Form filtrarPeliculas = {(nombre) => this.filtrarPeliculas(nombre)}/>
        <main>
            <h1>POPULAR MOVIES</h1>
            <Canciones peliculas = {this.state.popular}/>
            <h1>UPCOMING MOVIES</h1>
            <Canciones peliculas = {this.state.upcoming} />

        </main>
       


      </>
    )
  }
}

export default Home;