import React from "react";
import Header from '../src/components/header/header'
import HomePage from "./pages/HomePage/homepage"
import Footer from '../src/components/Footer/Footer'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>
        
  
      </div>
    );
  }

}

export default App;
