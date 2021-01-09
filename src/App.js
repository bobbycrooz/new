import React, {Component, useContext } from 'react'
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import {Pane} from './components/mainpane/mainpane'
import { namectx } from "./context"


const DivOne = styled.div`
background-color: lightgreen;
color:black;
@media screen and (max-width:600px){
  background-color: #282c34;
}
`

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "bobby"
    }
    // this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = (e) =>{
    e.preventDefault();
    this.setState({name: "Shola"})
  }

  render (){
    return (
      <DivOne className="App">
    <header className="App-header">
     
     <Pane title="Bobby's component 1" close={this.clickHandler}/>
      <p>
        {this.props.title} {this.state.name}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org" 
        target="_blank"
        rel="noopener noreferrer"
        onClick={this.clickHandler}
      >
        unknown
      </a>
    </header>
  </DivOne>
    )
    
  }
}



