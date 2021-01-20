import React from "react";
import { HomePage } from "./Pages/HomePage";
import { SellersPage } from "./Pages/SellersPage";
import Subheader from './Pages/components/subheader/Subheader'


class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />

        <Subheader/>
        
        {/* <SellersPage /> */}
      </div>
    );
  }
}

export default App;
