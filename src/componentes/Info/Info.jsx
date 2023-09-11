import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Info extends Component {


    constructor(props) {
        super(props)
        this.state = {
             texto: "Ver mas"

        }
    }

    esconder(){
        this.setState({
          texto:"Ver menos",
          overview: "Descripción: " + this.props.overview
        })
      }
    
      mostrar(){
        this.setState({
          texto:"Ver mas",
          overview:''
        })
      }
      
}