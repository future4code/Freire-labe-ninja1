import React from "react";
import Header from "../src/components/header/header";
import Homepage from "./pages/HomePage/homepage";
import Footer from '../src/components/Footer/Footer';
import {createGlobalStyle} from 'styled-components';

const EstiloPadrao = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }`

export default class App extends React.Component {
  state = {
    
  };
  
  render() {

       return (
      <div className="App">
      <EstiloPadrao/>
        <Header />
        <Homepage />
        <Footer/>
      </div>
    );
  }
}

