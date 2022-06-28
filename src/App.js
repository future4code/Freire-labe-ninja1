import React from "react";
import Header from '../src/components/header/header'
import {createGlobalStyle} from 'styled-components'


const EstiloPadrao = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }`

  


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <EstiloPadrao />
        <Header/>
  
      </div>
    );
  }

}

export default App;
