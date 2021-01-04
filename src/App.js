import React from 'react'
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"


export const App = (props) => {
const DivOne = styled.div`
  background-color: lightgreen;
  color:black;
  @media screen and (max-width:600px){
    background-color: #282c34;
  }
`

  return(
    <DivOne className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </DivOne>
  )
}