import React from "react";
import Header from '../src/components/header/header';
import Homepage from "./pages/HomePage/Homepage";


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header/>
        
      <Homepage/>
      </div>
    );
  }

}

export default App;
