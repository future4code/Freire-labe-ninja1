import React from "react";
import Header from '../src/components/header/header'
// import HomePage from "./pages/HomePage/homepage"
import Footer from '../src/components/Footer/Footer'

import HomeCard from "./HomeCard/Produtos/Produtos"
//import ColecaoDeProdutos from "./ColecaoDeProdutos"


class App extends React.Component {
  render () {
    return (
      <div className="App">
        
        <Header/>
        <HomeCard
        
        />
        {/* <HomePage/> */}
        <Footer/>
        {/* <ColecaoDeProdutos/> */}
      </div>
    );
  }

}

export default App;
