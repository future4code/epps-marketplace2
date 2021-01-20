import React from "react";
import { HomePage } from "./Pages/HomePage";
import { SellersPage } from "./Pages/SellersPage";
import productsCard from "./Pages/components/ProductsCard/productsCard"


class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <productsCard/>
       
        <SellersPage />
      </div>

    );
  }
}

export default App;
